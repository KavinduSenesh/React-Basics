"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAdd = CustomerAdd;
exports.CustomerDelete = CustomerDelete;
exports.getAllCustomers = getAllCustomers;
exports.CustomerUpdate = CustomerUpdate;
const client_1 = require("@prisma/client");
// this is the Prisma client that will be used to interact with the database, 
// prisma client is a singleton object that can be used to interact with the database in a type-safe way. 
const prisma = new client_1.PrismaClient();
function CustomerAdd(c) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newCustomer = yield prisma.customer.create({
                data: {
                    name: c.name,
                    email: c.email,
                    phone: c.phone
                }
            });
            console.log(`Customer ${newCustomer.name} added successfully`);
            return newCustomer;
        }
        catch (error) {
            console.error(`Error adding customer: ${error}`);
        }
    });
}
function CustomerDelete(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedCustomer = yield prisma.customer.delete({
                where: { email: email }
            });
            console.log('Customer deleted :', email);
            return deletedCustomer;
        }
        catch (err) {
            console.log("error deleting customer", err);
        }
    });
}
function getAllCustomers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield prisma.customer.findMany();
        }
        catch (err) {
            console.log("error getting customers from prisma data", err);
        }
    });
}
function CustomerUpdate(id, c) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedCustomer = yield prisma.customer.update({
                where: { email: c.email },
                data: {
                    name: c.name,
                    phone: c.phone
                }
            });
            console.log('Customer updated :', updatedCustomer);
            return updatedCustomer;
        }
        catch (err) {
            console.log("error updating customer", err);
        }
    });
}
