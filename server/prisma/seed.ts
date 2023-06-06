import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      userName: 'ShadowBlade',
      email: 'ShadowBlade@email.com',
      avatarUrl:
        'https://i.pinimg.com/550x/0e/51/7e/0e517eb57cb5a992ef3230b0e0d792af.jpg',
    },
  });

  const user1 = await prisma.user.create({
    data: {
      userName: 'Stormbringer',
      email: 'Stormbringer@email.com',
      avatarUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjlzKpsgPA-Icjs5ZZ9g-sdHEA8D1Okjmsxw&usqp=CAU',
    },
  });

  await prisma.user.create({
    data: {
      userName: 'NovaStar',
      email: 'NovaStar@email.com',
      avatarUrl:
        'https://creativefreedomrpg.com/download/file.php?avatar=113360_1523801896.jpg',
    },
  });

  await prisma.message.create({
    data: {
      text:
        'Um nome misterioso e poderoso que evoca imagens de um guerreiro furtivo e habilidoso.',
      messengerId: user.id,
    },
  });

  await prisma.message.create({
    data: {
      text:
        'Um método de roteamento é derivado a partir de um dos métodos HTTP, e é anexado a uma instância da classe express.',
      messengerId: user.id,
    },
  });

  await prisma.message.create({
    data: {
      text:
        'Este apelido transmite a ideia de um jogador capaz de desencadear tempestades destrutivas e dominar o jogo.',
      messengerId: user1.id,
    },
  });
}

main();
