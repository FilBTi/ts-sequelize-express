import Cart, {CartAtributes}from "../../models/cart";
import Product from "../../models/product";
import User from "../../models/users";

export default class CartService {

    async getAll(){
        try{
            const result = await Cart.findAll();
            return (result.length === 0 || result === undefined) ? 'no data' : result;
        }catch (err){ 
            console.error(err);
            return err;
        }
    };

    async getById(id: number){
        try{
            const item = await Cart.findByPk(id);
            return item;
        }catch(err){
            console.error(err);
            return err;
        }
    };

    async getByUserId(userId: number){
        try{
            const result = await Cart.findAll({where:{userId: userId}});
            return result;
        }catch(err){
            console.error(err);
            return err;
        }
    };

    
    async create(userId: number, productId: number, cartData: Omit<CartAtributes, 'product' | 'user'>){
        try{
            const user: any = await User.findOne({where: {id: userId}});
            const product: any = await Product.findOne({where: {id: productId}});
            const result = await Cart.create({...cartData, userId: user.id, userName: user.name, productId: product.id, productName: product.name});
            return result;
        }catch (err){
            console.error(err);
            return err;
        }
    };

    async updateProduct(basketId: number, cartData: CartAtributes){
        try{
            const result = await Cart.update(
                {productId: cartData.productId, product: cartData.product},
                {where: {id: basketId}}
            );
            return result;
        }catch (err){
            console.error(err);
            return err;
        }
    };

}

