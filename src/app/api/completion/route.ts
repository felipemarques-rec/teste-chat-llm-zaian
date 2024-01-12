import { prisma } from "@/utils/config";
import { decryptToken, errorHandler } from "@/lib/utils";
import Replicate from 'replicate';
import { ReplicateStream, StreamingTextResponse } from 'ai';
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const messageSchema = z.object({
  prompt: z.string(),
});

export const getReplicateApiInstance = (apiKey: string) => {
  return new Replicate({
    auth: apiKey,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    await messageSchema.parseAsync({ prompt });
    const token = req.cookies.get("accessToken")!.value!;
    const { apiKey, userId } = decryptToken(token, process.env.JWT_SECRET!);
    const replicate = getReplicateApiInstance(apiKey);
    
    const response = await replicate.predictions.create({
      stream: true,
      version: '2c1608e18606fad2812020dc541930f2d0495ce32eee50074220b87300bc16e1',
      input: {
        prompt,
      },
    });

    
    const stream = await ReplicateStream(response, {
      onCompletion: async (completion: string) => {
        await prisma.queries.createMany({
          data: [
            {
              data: prompt,
              isUser: true,
              user_id: userId,
            },
            {
              data: completion ?? "",
              isUser: false,
              user_id: userId,
            },
          ],
        });
      }
    });

    return new StreamingTextResponse(stream);

  } catch (err) {
    console.log(err);

    return errorHandler(err);
  }
}

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("accessToken")!.value!;
    const { userId } = decryptToken(token, process.env.JWT_SECRET!);
    const queries = await prisma.queries.findMany({
      orderBy: {
        id: "asc",
      },
      where: {
        user_id: userId,
      },
    });
    return NextResponse.json({ queries });
  } catch (err) {
    return errorHandler(err);
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const token = req.cookies.get("accessToken")!.value!;
    const { userId } = decryptToken(token, process.env.JWT_SECRET!);
    await prisma.queries.deleteMany({
      where: {
        user_id: userId,
      },
    });
    return NextResponse.json({ message: "Successfully cleared conversation" });
  } catch (err) {
    return errorHandler(err);
  }
}
