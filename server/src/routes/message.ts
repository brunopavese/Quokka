import express from 'express';

import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient({
  log: ['query'],
});

export async function messageRoutes() {
  const app = express();

  app.use(express.json());

  app.get('/message/count', async (req, res) => {
    const count = await prisma.message.count();

    res.json(count);
  });

  app.post('/message', async (req, res) => {
    try {
      const createPostBody = z.object({
        text: z.string(),
      });

      const { text } = createPostBody.parse(req.body);

      // await prisma.message.create({
      //   data: {
      //     text,

      //   }
      // })

      return res.status(201).send({ text });
    } catch (e) {
      return res
        .status(400)
        .json({ error: e, message: 'Não foi possível criar a mensagem' });
    }
  });
}
