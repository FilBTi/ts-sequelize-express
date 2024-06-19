import { Sequelize } from "sequelize-typescript";
import User from "../models/users"
import Product from "../models/product"
import Basket from "../models/cart";
import Promotion from "../models/promotion";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/models/models.db'
})

const models : any = [User, Product, Basket, Promotion];
sequelize.addModels(models);

Product.sync()
.then(() => {
    console.log('Таблица Products успешно синхронизирована');
})
.catch(err => {
    console.error('Ошибка при синхронизации таблицы Products:', err);
});

const testConection = async () => {
    try{
        await sequelize.authenticate();
        console.log('conect is good');
    } catch (err) {
        console.error('oups disconect', err);
    }
}

testConection();

export default sequelize