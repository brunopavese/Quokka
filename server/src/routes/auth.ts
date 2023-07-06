import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';
import shortid from 'shortid';

export const authRoutes = Router();

function generateRandomUsername(name: string): string {
  const short = shortid()
  const username = name.replace(/\s+/g, '').toLowerCase() + short;
  return username;
}

authRoutes.post('/', async (req: Request, res: Response): Promise<void> => {
  const createUserBody = z.object({
    accessToken: z.string()
  })

  const { accessToken } = createUserBody.parse(req.body)

  const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })

  const userData = await userResponse.json()

  const userInfoSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    name: z.string(),
    picture: z.string().url()
  })

  const userInfo = userInfoSchema.parse(userData)

  let user = await prisma.user.findUnique({
    where: {
     googleId: userInfo.id
    }
  })

  if (!user) {
    user = await prisma.user.create({
      data: {
        userName: generateRandomUsername(userInfo.name),
        email: userInfo.email,
        googleId: userInfo.id,
        avatarUrl: userInfo.picture,
      }
    })
  }

})
