export declare class FinancesCreateDto {
    name: string;
    email: number;
    phone: string;
    organization: string;
    amount: string;
}
declare const FinancesCreateDao_base: import("@nestjs/common").Type<Partial<FinancesCreateDto>>;
export declare class FinancesCreateDao extends FinancesCreateDao_base {
}
export {};
