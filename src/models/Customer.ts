export class Customer {
    Name: string;
    Email: string;
    Password: string;
    Phone: string;

    constructor(name: string, email: string, password: string, phone: string) {
        this.Name = name;
        this.Email = email;
        this.Password = password;
        this.Phone = phone;
    }
}