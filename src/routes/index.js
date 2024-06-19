"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user"));
const product_1 = __importDefault(require("./product"));
const cart_1 = __importDefault(require("./cart"));
const auth_1 = __importDefault(require("./auth"));
const auth_2 = require("../middelwaers/auth");
const rout = express_1.default.Router();
rout.use('/users', user_1.default);
rout.use('/product', auth_2.auth, auth_2.isAdmin, product_1.default);
rout.use('/basket', cart_1.default);
rout.use('/aut', auth_1.default);
exports.default = rout;
