export class CustomerModel {
    name : string;
    mobile : string;
    email : string;
    constructor(name: string, email: string, mobile: string) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }
}