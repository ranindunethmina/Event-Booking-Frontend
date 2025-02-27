export class Admin {
    Username: string;
    Email: string;
    Password: string;
    Role: string;

    constructor(userName: string, email: string, password: string, role: string) {
        this.Username = userName;
        this.Email = email;
        this.Password = password;
        this.Role = role;
    }
}