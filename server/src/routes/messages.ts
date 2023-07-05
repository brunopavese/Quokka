import { Router, Request, Response } from 'express';
import { Message } from '@prisma/client';
import { prisma } from '../lib/prisma';

import { z } from 'zod';

const messageClient = prisma.message;
const userClient = prisma.user
export const router = Router();

router.get('/', async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allMessages: Message[] = await messageClient.findMany();

    res.status(200).json({ data: allMessages });
  } catch (error) {
    console.log(error);
  }
});

router.get('/count', async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const count = await messageClient.count();

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
    const messageId = req.params.id;
    const user = await messageClient.findUnique({ where: { id: messageId } });

    res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const createPostBody = z.object({
      text: z.string().nonempty('Cannot be empty').max(300, 'Limited to 300 characters maximum per message'),
      userId: z.string().nonempty('User ID is required').cuid({message: 'Invalid ID'})
    });
    const { text, userId } = createPostBody.parse(req.body);
    const userExists = await userClient.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      res.status(404).json({ error: 'User not found' });
    }

    const message = await messageClient.create({
      data: {
        text,
        userId,
      },
    });

    res.status(201).json({ data: message });
  } catch (error) {
    res
      .status(500)
      .json({ error: error, message: 'Unable to create message' });
  }
});
