import { Router } from "express";

const router = Router();


// TODO buscar os dados dos usuarios pelo prisma
router.get('/users', (request, response) => {

    return response.status(200).json({
        "test": 'Ok'
    });
});

export { router };