import { PrismaClient } from '@prisma/client';
import { UserController } from './UserController';

const userController = new UserController(new PrismaClient());

export { userController };