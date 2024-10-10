import { Product } from "../../product/product.model";
import { Prescription } from "../prescription.model";

export class PrescriptionProductData extends Prescription {

    products?: Product[] = [];
}
