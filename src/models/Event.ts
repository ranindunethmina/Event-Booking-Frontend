export class Event {
    EventID: string;
    Name: string;
    Location: string;
    Date: string;
    Description: string;

    constructor(id: string, name: string, location: string, date: string, description: string) {
        this.EventID = id;
        this.Name = name;
        this.Location = location;
        this.Date = date;
        this.Description = description;
    }
}
