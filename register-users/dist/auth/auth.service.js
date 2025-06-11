"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const bcryptjs = require("bcryptjs");
let AuthService = class AuthService {
    client;
    async onModuleInit() {
        this.client = microservices_1.ClientProxyFactory.create({
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'user_created',
                queueOptions: {
                    durable: false,
                },
            },
        });
        await this.client.connect();
    }
    async register({ name, email, password }) {
        const hashedPassword = await bcryptjs.hash(password, 10);
        const payload = { name, email, password: hashedPassword };
        const result = await this.client.send('user_created', payload).toPromise();
        if (result === 'user already exists') {
            return {
                message: 'User with this email already exists',
            };
        }
        return {
            message: 'User created successfully',
            user: {
                name,
                email,
            },
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map