import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getEvents = async (_req: Request, res: Response) => {
  const events = await prisma.event.findMany();
  console.log(events);

  res.status(StatusCodes.OK).json({ events });
};
