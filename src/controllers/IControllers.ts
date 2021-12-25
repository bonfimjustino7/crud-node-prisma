import { Request, Response } from 'express';


export interface IControllers {
    async get(request: Request, response: Response): Promise<Response>;
    async post(request: Request, response: Response): Promise<Response>;
    async update(request: Request, response: Response): Promise<Response>;
    async delete(request: Request, response: Response): Promise<Response>;
}