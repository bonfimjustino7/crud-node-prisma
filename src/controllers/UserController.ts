import { PrismaClient } from '@prisma/client';
import { User } from './../entities/User';
import { IControllers } from './IControllers';
import { Request, Response } from 'express';

export class UserController implements IControllers {

    constructor(
        private prismaCliente: PrismaClient
    ) {}

    async get(request: Request, response: Response): Promise<Response> {
        
        const { id } = request.params;
        if (!id) {
            const user = await this.prismaCliente.user.findMany();
            return response.status(200).json(user);

        } else {
            const user = await this.prismaCliente.user.findUnique(
                {
                    where: { id: id}
                }
            )
            return response.status(200).json(user);
        }
    }

    async post(request: Request, response: Response): Promise<Response> {

        const { id, name, email } = request.body;

        if (!Object.keys(request.body).length) {
            return response.status(400).json({ 'error': 'Conteúdo em branco' });
        }

        try {
            const user = await this.prismaCliente.user.create({
                data: {         
                    id: id,
                    name: name,
                    email: email
                }
            });
            return response.status(201).json(user);

        } catch (error) {
            return response.status(400).json(error);    
        }

    }

    async update(request: Request, response: Response): Promise<Response> {

        const { name, email } = request.body;

        const { id } = request.params;

        if (!id) {
            return response.status(404).json({'error': 'Id inválido'});
        }

        try {
            const user = await this.prismaCliente.user.update({
                data: {
                    name: name,
                    email: email
                }, where: {
                    id: id
                }
            });
        
            return response.status(200).json(user);

        } catch (error) {
            return response.status(404).json(error);
        }

    }

    async delete(request: Request, response: Response): Promise<Response> {
        
        try {
            const { id } = request.params;

            await this.prismaCliente.user.delete({
                where: {
                    id: id
                }
            });

            return response.status(204).send();
        } catch (error) {
            return response.status(204).json(error);
        }
    }
    
}