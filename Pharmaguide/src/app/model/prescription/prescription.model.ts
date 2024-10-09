import { Pharmacy } from "../pharmacy/pharmacy.model";
import { PrescriptionProduct } from "../prescriptionProduct/prescription-product.model";

export class Prescription {

    prescriptionId?: number;

    pharmacyId?: number;

    date?: Date;

    pharmacy?: Pharmacy;
    
    prescriptionProducts: PrescriptionProduct[] = [];
}