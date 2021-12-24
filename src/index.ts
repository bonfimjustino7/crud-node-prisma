import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


async function main() {
    await prisma.user.create({
        data: {
            id: 'user-1',
            name: 'Bonfim Justino',
            email: 'bonfim1999@gmail.com',
            groups: {
                connectOrCreate: {
                    where: {
                        id: 'group-1'
                    },
                    create: {
                        id: 'group-1',
                        name: 'Group 1',
                    }
                }
            }
        }
    });
}

main();