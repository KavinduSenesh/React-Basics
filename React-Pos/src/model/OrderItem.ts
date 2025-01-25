export class OrderItem{
    itemCode: string;
    itemName: string;
    quantity: number;
    total: number;

    constructor(itemCode: string, item: string, quantity: number, total: number) {
        this.itemCode = itemCode;
        this.itemName = item;
        this.quantity = quantity;
        this.total = total;
    }
}