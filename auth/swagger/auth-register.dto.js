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
exports.AuthRegisterDao = exports.UpdateAuthRegisterDto = exports.AuthRegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AuthRegisterDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], AuthRegisterDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], AuthRegisterDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], AuthRegisterDto.prototype, "phone", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], AuthRegisterDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], AuthRegisterDto.prototype, "role", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], AuthRegisterDto.prototype, "other_role", void 0);
exports.AuthRegisterDto = AuthRegisterDto;
class UpdateAuthRegisterDto extends swagger_1.PartialType(swagger_1.OmitType(AuthRegisterDto, ['password'])) {
}
exports.UpdateAuthRegisterDto = UpdateAuthRegisterDto;
class AuthRegisterDao {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", UpdateAuthRegisterDto)
], AuthRegisterDao.prototype, "user", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], AuthRegisterDao.prototype, "accessToken", void 0);
exports.AuthRegisterDao = AuthRegisterDao;
//# sourceMappingURL=auth-register.dto.js.map