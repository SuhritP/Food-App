import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class RequestFoodsFindAllDao {

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
    mobile_number: string;


    @ApiProperty()
    user_id: string;

    @ApiProperty()
    acceptedId: string;
    


    @ApiProperty()
    postedName: string;
    @ApiProperty()
    rejectedIds: Array<ObjectId>;
    
    
}

