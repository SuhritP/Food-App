import { ApiProperty, PartialType } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class RequestFoodsCreateDto {

    @ApiProperty()
    food_type: string;

    @ApiProperty()
    quantity_required: string;

    @ApiProperty()
    food_required_date: string;

    @ApiProperty()
    transport_details: string;

    @ApiProperty()
    food_required_location: string;

    @ApiProperty()
    food_image: string;

    @ApiProperty()
    user_id: string;

    @ApiProperty()
    mobile_number: string;

    @ApiProperty()
    acceptedId: string;


    @ApiProperty()
    postedName: string;

    @ApiProperty()
    rejectedIds: Array<ObjectId>;

}

export class RequestFoodsCreateDao extends PartialType(RequestFoodsCreateDto) { }