import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  getHello(): string {
    return 'Hello World!';
  }

  

  async getDonateFoods() {
    return [
      {
        id: 1,
        food_type: 'string',
        quantity_required: 2,
        food_required_date: 'string',
        transport_details: 'string',
        food_required_location: 'string',
        user_id: 1,
      },
      {
        id: 2,
        food_type: 'kuska',
        quantity_required: 2,
        food_required_date: 'today',
        transport_details: 'string',
        food_required_location: 'string',
        user_id: 1,
      },
    ];
  }

  async postDonateFoods() {
    return {
      food_type: 'Beef Biriyani2',
      quantity_required: 5,
      food_required_date: 'today',
      transport_details: 'string',
      food_required_location: 'string',
      userId: 8,
      id: 8,
    };
  }

  async finances() {
    return {
      name: 'string',
      email: 'string',
      phone: 'string',
      organization: 'string',
      amount: 1,
      id: 7,
    };
  }

  async getRequestFoods() {
    return [
      {
        id: 1,
        food_type: 'string',
        quantity_required: 2,
        food_required_date: 'string',
        transport_details: 'string',
        food_required_location: 'string',
        user_id: 1,
      },
      {
        id: 2,
        food_type: 'kuska',
        quantity_required: 2,
        food_required_date: 'today',
        transport_details: 'string',
        food_required_location: 'string',
        user_id: 1,
      },
    ];
  }

  async getRequestFood() {
    return {
      id: 1,
      food_type: 'string',
      quantity_required: 2,
      food_required_date: 'string',
      transport_details: 'string',
      food_required_location: 'string',
      user_id: 1,
    };
  }

  async postRequestFoods() {
    return {
      food_type: 'Beef Biriyani2',
      quantity_required: 5,
      food_required_date: 'today',
      transport_details: 'string',
      food_required_location: 'string',
      userId: 8,
      id: 8,
    };
  }

  async request_food_image() {}

  async donate_food_image() {}
}
