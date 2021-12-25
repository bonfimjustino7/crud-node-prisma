import { Router } from "express";
import { userController } from "./controllers";

const router = Router();


router.get('/users', (request, response) => {
    return userController.get(request, response);
});

router.get('/users/:id', (request, response) => {
    return userController.get(request, response);
});

router.post('/users', (request, response) => {
    return userController.post(request, response);
});

router.put('/users', (request, response) => {
    return userController.update(request, response);
});

router.put('/users/:id', (request, response) => {
    return userController.update(request, response);
});

router.delete('/users/:id', (request, response) => {
    return userController.delete(request, response);
});

export { router };