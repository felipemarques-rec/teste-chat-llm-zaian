import { PrismaClient } from "@prisma/client";

// Create a singleton instance of the PrismaClient
class PrismaManager {
  private static instance: PrismaManager | null = null;
  private prisma: PrismaClient;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  static getInstance(): PrismaManager {
    if (!PrismaManager.instance) {
      PrismaManager.instance = new PrismaManager();
    }
    return PrismaManager.instance;
  }

  get client(): PrismaClient {
    return this.prisma;
  }
}

// Export a single instance of PrismaClient
const prismaManager = PrismaManager.getInstance();
export const prisma = prismaManager.client;

// Optionally, set up global access in non-production environments
if (process.env.NODE_ENV !== "production") {
  (global as any).prisma = prisma;
}
