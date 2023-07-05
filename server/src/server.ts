import express from 'express';

import { z } from 'zod';
import { prisma } from './lib/prisma';
import { router as users} from './routes/users';

require('dotenv').config();

const port = process.env.PORT;

async function bootstrap() {
  const app = express();

  app.use(express.json());
  app.use('/users', users)

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

  await app.listen(port, () => {
    console.log(`${process.env.APP_NAME} rodando em http://localhost:${port}`);
  });
}

bootstrap();
