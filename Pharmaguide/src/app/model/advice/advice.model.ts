import { PrescriptionProductAdvice } from "../prescriptionProductAdvice/prescription-product-advice.model";
import { ProductAdvice } from "../productAdvice/product-advice.model";

export class Advice {

    adviceId?: number;

    content?: string = '';

    type?: string = '';

    dateStart?: Date = new Date();

    dateEnd?: Date;

    flagIsDeleted?: boolean;

    productAdvices?: ProductAdvice[] = [];

    prescriptionProductAdvices?: PrescriptionProductAdvice[] = [];
}
