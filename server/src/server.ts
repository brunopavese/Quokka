import express from 'express';
import { router as users} from './routes/users';
import { router as messages} from './routes/messages';

require('dotenv').config();

async function bootstrap() {
  const app = express();

  app.use(express.json());
  app.use('/users', users)
  app.use('/messages', messages)


  app.listen(process.env.PORT, () => {
    console.log(`${process.env.APP_NAME} rodando em http://localhost:${process.env.PORT}`);
  });
}

bootstrap();
