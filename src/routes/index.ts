import Express  from "express";
import userRout from './user';
import productRout from './product';
import cartRout from './cart';
import authoRout from './auth'
import { auth, isAdmin} from "../middelwaers/auth";


const rout: Express.Router = Express.Router();

rout.use('/users', userRout);
rout.use('/product', auth, isAdmin, productRout);
rout.use('/cart',  cartRout);
rout.use('/aut',  authoRout);



export default rout;

