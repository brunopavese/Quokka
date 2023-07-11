import express from 'express';
import cors from 'cors';
import { userRoutes } from './routes/users';
import { messageRoutes } from './routes/messages';


require('dotenv').config();

async function bootstrap() {
  const app = express();

  app.use(express.json());
  app.use(cors())
  app.use('/users', userRoutes);
  app.use('/messages', messageRoutes);

  app.listen(process.env.PORT, () => {
    console.log(
      `${process.env.APP_NAME} rodando em http://localhost:${process.env.PORT}`,
    );
  });
}

bootstrap();
