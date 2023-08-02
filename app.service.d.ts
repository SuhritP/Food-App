export declare class AppService {
    constructor();
    getHello(): string;
    getDonateFoods(): Promise<{
        id: number;
        food_type: string;
        quantity_required: number;
        food_required_date: string;
        transport_details: string;
        food_required_location: string;
        user_id: number;
    }[]>;
    postDonateFoods(): Promise<{
        food_type: string;
        quantity_required: number;
        food_required_date: string;
        transport_details: string;
        food_required_location: string;
        userId: number;
        id: number;
    }>;
    finances(): Promise<{
        name: string;
        email: string;
        phone: string;
        organization: string;
        amount: number;
        id: number;
    }>;
    getRequestFoods(): Promise<{
        id: number;
        food_type: string;
        quantity_required: number;
        food_required_date: string;
        transport_details: string;
        food_required_location: string;
        user_id: number;
    }[]>;
    getRequestFood(): Promise<{
        id: number;
        food_type: string;
        quantity_required: number;
        food_required_date: string;
        transport_details: string;
        food_required_location: string;
        user_id: number;
    }>;
    postRequestFoods(): Promise<{
        food_type: string;
        quantity_required: number;
        food_required_date: string;
        transport_details: string;
        food_required_location: string;
        userId: number;
        id: number;
    }>;
    request_food_image(): Promise<void>;
    donate_food_image(): Promise<void>;
}
