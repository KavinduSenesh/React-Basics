import {OrderItem} from "./OrderItem.ts";

export class Order{
    orderId: string;
    customerId: string;
    orderDate: string;
    orderItems: OrderItem[];

    constructor(id: string, customerId: string, date: string, orderItems: OrderItem[]){
        this.orderId = id;
        this.customerId = customerId;
        this.orderDate = date;
        this.orderItems = orderItems;
    }
}