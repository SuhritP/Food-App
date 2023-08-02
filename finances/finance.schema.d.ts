import { Document } from 'mongoose';
export declare type FinanceDocument = Finance & Document;
export declare class Finance {
    name: string;
    email: string;
    phone: string;
    organization: string;
    amount: string;
}
export declare const FinanceSchema: import("mongoose").Schema<Document<Finance, any, any>, import("mongoose").Model<Document<Finance, any, any>, any, any>, undefined, {}>;
