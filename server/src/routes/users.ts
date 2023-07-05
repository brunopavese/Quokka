import { Router, Request, Response } from "express";
import { User } from "@prisma/client";
import { prisma } from "../lib/prisma";

const userClient = prisma.user
export const router = Router();

router.get('/', async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allUsers: User[] = await userClient.findMany();

    res.status(200).json({ data: allUsers });
  } catch (error) {
    console.log(error);
  }
});

router.get('/count', async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const count = await userClient.count();

    res.status(201).json(count);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const user = await userClient.findUnique({ where: { id: userId } });

    res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userData = req.body;
    const user = await userClient.create({
      data: { ...userData },
    });

    res.status(201).json({ data: user });
  } catch (error) {
    console.log(error);
  }
});

router.put('/:id', async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUserData = await userClient.update({
      where: { id: userId },
      data: { ...userData },
    });

    res.status(200).json({ data: updatedUserData });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:id', async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.id;
    const userData = await userClient.delete({ where: { id: userId } });

    res.status(200).json({ data: {} });
  } catch (error) {
    console.log(error);
  }
});

