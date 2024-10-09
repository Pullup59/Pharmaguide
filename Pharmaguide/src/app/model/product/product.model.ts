import { PrescriptionProduct } from "../prescriptionProduct/prescription-product.model";
import { ProductAdvice } from "../productAdvice/product-advice.model";

export class Product {

    productId?: number;
    
    name: string = '';

    cip?: number;

    dci: string = '';

    dosage: string = '';

    flagIsDelete?: boolean;

    productAdvices: ProductAdvice[] = [];
    
    prescriptionProducts: PrescriptionProduct[] = [];
}
