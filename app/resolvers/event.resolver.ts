import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    events: async (_parent: unknown, args: { genres: string[] }) => {
      return prisma.event.findMany({
        where: {
          genre: { in: args.genres },
        },
      });
    },
  },
};
