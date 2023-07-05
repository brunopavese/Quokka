import { Router, Request, Response } from 'express';
import { User } from '@prisma/client';
import { prisma } from '../lib/prisma';

export const userRoutes = Router();

userRoutes.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers: User[] = await prisma.user.findMany();

    res.status(200).json({ data: allUsers });
  } catch (error) {
    console.log(error);
  }
});

userRoutes.get('/count', async (req: Request, res: Response): Promise<void> => {
  try {
    const count = await prisma.user.count();

    res.status(201).json(count);
  } catch (error) {
    console.log(error);
  }
});

userRoutes.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const user = await prisma.user.findUnique({ where: { id: userId } });

    res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
  }
});

userRoutes.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body;
    const user = await prisma.user.create({
      data: { ...userData },
    });

    res.status(201).json({ data: user });
  } catch (error) {
    console.log(error);
  }
});

userRoutes.put('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUserData = await prisma.user.update({
      where: { id: userId },
      data: { ...userData },
    });

    res.status(200).json({ data: updatedUserData });
  } catch (error) {
    console.log(error);
  }
});

userRoutes.delete(
  '/:id',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const userId = req.params.id;
      const userData = await prisma.user.delete({ where: { id: userId } });

      res.status(200).json({ data: {} });
    } catch (error) {
      console.log(error);
    }
  },
);
