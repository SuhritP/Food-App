import { ApiProperty, PartialType } from "@nestjs/swagger";

export class FinancesFindAllDto {

    @ApiProperty()
    name: string;

    @ApiProperty()
    email: number;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    organization: string;

    @ApiProperty()
    amount: string;
    
}

export class FinancesFindAllDao extends PartialType(FinancesFindAllDto) {}

