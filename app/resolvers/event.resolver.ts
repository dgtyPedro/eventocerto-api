import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    events: async () => {
      return prisma.event.findMany();
    },
  },
};
