// OrderModel.ts
export class OrderModel {
    constructor(
        public items: ItemModel[],
        public totalAmount: number
    ) {}
}
