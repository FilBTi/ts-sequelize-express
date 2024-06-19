import Express  from "express";
import CartController from "../../controllers/cart";



const rout: Express.Router = Express.Router();

const cart = new CartController();

rout.route('/')
    .get(cart.get)
    .post(cart.create);

rout.route('/:id')
    .get(cart.getById)
    .post(cart.update);


export default rout
