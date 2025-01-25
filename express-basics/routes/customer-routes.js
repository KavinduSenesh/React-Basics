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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_data_store_1 = require("../database/prisma-data-store");
// This is the route that will be used to add a new customer to the database.
const router = express_1.default.Router();
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const customer = req.body;
    try {
        const addedCustomer = yield (0, prisma_data_store_1.CustomerAdd)(customer);
        res.json(addedCustomer);
    }
    catch (error) {
        console.error(`Error adding customer: ${error}`);
        res.status(400).send(`Error adding customer: ${error}`);
    }
}));
router.delete("/delete/:email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    try {
        const deletedCustomer = yield (0, prisma_data_store_1.CustomerDelete)(email);
        res.json(deletedCustomer);
    }
    catch (err) {
        console.log("error deleting customer", err);
    }
}));
router.put("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const customer = req.body;
    try {
        const updatedCustomer = yield (0, prisma_data_store_1.CustomerUpdate)(id, customer);
        res.json(updatedCustomer);
    }
    catch (err) {
        console.log("error updating customer", err);
    }
}));
router.get("/view", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield (0, prisma_data_store_1.getAllCustomers)();
        res.json(customers);
    }
    catch (err) {
        console.log("error getting customers", err);
    }
}));
exports.default = router;
