"use client";

import { Copy } from "lucide-react";
import { useTheme } from "next-themes";
import Typewriter from "typewriter-effect";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { BotAvatar } from "./bot-avatar";
import { UserAvatar } from "./user-avatar";

export interface ChatMessageProps {
  role: "system" | "user",
  content?: string;
  isLoading?: boolean;
  src?: string;
}

export const ChatMessage = ({
  role,
  content,
  isLoading,
  src
}: ChatMessageProps) => {
  const { toast } = useToast();
  const { theme } = useTheme();
  
  const onCopy = () => {
    if (!content) {
      return;
    }

    navigator.clipboard.writeText(content);
    toast({
      description: "Message copied to clipboard.",
      duration: 3000,
    })
  }

  return (
    <div className={cn(
      "group flex items-start gap-x-3 py-4 top-0 left-0 w-full h-full bg-opacity-40 border rounded-3xl rounded-bl bg-slate-100 p-2 mb-4 dark:bg-slate-900 sm:px-6",
      role !== "user" && "justify-end bg-slate-200 p-2 dark:bg-slate-200"
    )}>
      {role !== "user" && src && <BotAvatar src={src} />}
      {role === "user" && <UserAvatar />}
      <div className="rounded-md px-4 py-2 text-sm bg-primary/10 w-full">
        {isLoading 
          ? (<Typewriter
            options={{
              delay: 85,
              loop: true,
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("...").start();
            }}
          />)
          : content}
      </div>
      {role !== "user" && !isLoading && (
        <Button 
          onClick={onCopy} 
          className="opacity-0 group-hover:opacity-100 transition" 
          size="icon"
          variant="ghost"
        >
          <Copy className="w-4 h-4" />
        </Button>
      )}
    </div>
  )
}