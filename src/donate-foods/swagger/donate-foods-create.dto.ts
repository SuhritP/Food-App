import { ApiProperty, PartialType } from "@nestjs/swagger";

export class DonateFoodsCreateDto {

    @ApiProperty()
    food_type: string;

    @ApiProperty()
    quantity: string;

    @ApiProperty()
    food_available_date: string;

    @ApiProperty()
    transport_details: string;

    @ApiProperty()
    food_image: string;

    @ApiProperty()
    mobile_number: string;

    @ApiProperty()
    user_id: string;

    @ApiProperty()
    postedName: string;
    @ApiProperty()
    active: boolean;
    
}

export class DonateFoodsCreateDao extends PartialType(DonateFoodsCreateDto) {} 