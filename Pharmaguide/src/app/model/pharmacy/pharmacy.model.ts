import { Prescription } from "../prescription/prescription.model";

export class Pharmacy {

    pharmacyId?: number;

    name: string = '';
    
    prescriptions: Prescription[] = [];
}
