import { Advice } from "../advice/advice.model";
import { Product } from "../product/product.model";

export class ProductAdvice {

    productId?: number;
    
    product?: Product;

    adviceId?: number;

    advice?: Advice;
}
