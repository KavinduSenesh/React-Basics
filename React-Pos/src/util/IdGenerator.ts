export function generateCustomerID() {
    return "CUS-" + Math.floor(Math.random() * 100000);
}
export function generateItemCode(){
    return "Item-" + Math.floor(Math.random() * 10000);
}