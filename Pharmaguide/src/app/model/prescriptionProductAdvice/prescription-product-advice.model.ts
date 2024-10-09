import { Advice } from "../advice/advice.model";
import { PrescriptionProduct } from "../prescriptionProduct/prescription-product.model";

export class PrescriptionProductAdvice {

    prescriptionId?: number;

    productId?: number;

    adviceId?: number;

    prescriptionProduct?: PrescriptionProduct;

    advice?: Advice;
}
