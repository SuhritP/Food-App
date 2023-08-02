"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor() { }
    getHello() {
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
    async request_food_image() { }
    async donate_food_image() { }
};
AppService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map