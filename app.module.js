"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const serve_static_1 = require("@nestjs/serve-static");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const finances_module_1 = require("./finances/finances.module");
const request_foods_module_1 = require("./request-foods/request-foods.module");
const donate_foods_module_1 = require("./donate-foods/donate-foods.module");
const auth_module_1 = require("./auth/auth.module");
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const transform_interceptor_1 = require("./transform.interceptor");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'public'),
                exclude: ['/api*']
            }),
            mongoose_1.MongooseModule.forRoot('mongodb+srv://admin:qWyWhaqcQvnHWR0e@admin.m2uhr.mongodb.net/nolo?retryWrites=true&w=majority'),
            users_module_1.UsersModule,
            finances_module_1.FinancesModule,
            request_foods_module_1.RequestFoodsModule,
            donate_foods_module_1.DonateFoodsModule,
            auth_module_1.AuthModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: transform_interceptor_1.TransformInterceptor,
            }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map