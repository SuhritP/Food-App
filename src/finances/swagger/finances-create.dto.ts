import { ApiProperty, PartialType } from "@nestjs/swagger";

export class FinancesCreateDto {

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

export class FinancesCreateDao extends PartialType(FinancesCreateDto) {} 