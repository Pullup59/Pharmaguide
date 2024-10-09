import { Prescription } from "../prescription/prescription.model";
import { PrescriptionProductAdvice } from "../prescriptionProductAdvice/prescription-product-advice.model";
import { Product } from "../product/product.model";

export class PrescriptionProduct {

    prescriptionId?: number;

    prescription?: Prescription;
    
    productId?: number;

    product?: Product;
    
    prescriptionProductAdvices: PrescriptionProductAdvice[] = [];
  }