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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
function LogClass(constructor) {
    console.log('------------------------------');
    console.log('Class created!');
    console.log('------------------------------\n');
}
function LogAccessor(target, propertyName, descriptor) {
    console.log('***********************');
    console.log(`Accessors for property ${propertyName} created!`);
    console.log('***********************\n');
}
function LogMethod(target, methodName, descriptor) {
    console.log('==========================');
    console.log(`Method ${methodName} created!`);
    console.log('==========================\n');
}
function LogProperty(target, propertyName) {
    console.log('++++++++++++++++++++++++++++++++');
    console.log(`Property ${propertyName} creadted!`);
    console.log('++++++++++++++++++++++++++++++++\n');
}
function LogParameter(target, methodName, parameterIndex) {
    console.log('................................');
    console.log(`Parameter #${parameterIndex} for method ${methodName} created!`);
    console.log('................................\n');
}
let User = class User {
    name;
    age;
    _email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    get email() {
        return this._email;
    }
    set email(val) {
        this._email = val;
    }
    getInfo(condensed, test) {
        return condensed ? `Person ${this.name}` : `Person ${this.name} is ${this.age} years old with email: ${this.email}`;
    }
};
__decorate([
    LogProperty,
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    LogAccessor,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], User.prototype, "email", null);
__decorate([
    LogMethod,
    __param(0, LogParameter),
    __param(1, LogParameter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, String]),
    __metadata("design:returntype", String)
], User.prototype, "getInfo", null);
User = __decorate([
    LogClass,
    __metadata("design:paramtypes", [String, Number, String])
], User);
//@LogClass
class Employee {
    name = 'Daniel';
    salary = 2000;
}
//# sourceMappingURL=01-user-demo.js.map