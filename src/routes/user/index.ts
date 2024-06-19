import Express  from "express";
import UserController from "../../controllers/user";

const rout: Express.Router = Express.Router();

const userServis = new UserController;

rout.route('/')
    .get(userServis.getAll)
    .post(userServis.create)

rout.route('/:id')
    .get(userServis.getId)
    .post(userServis.updatePas)

rout.delete('/del', userServis.delete)

export default rout