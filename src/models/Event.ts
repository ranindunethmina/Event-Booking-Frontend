export class Event {
    EventId: number;
    Title: string;
    Description: string;
    Location: string;
    EventDate: string;
    TicketPrice: number;
    TotalTickets: number;
    AvailableTickets: number;

    constructor(id: number, title: string, location: string, date: string, description: string, TicketPrice: number, TotalTickets: number, AvailableTickets: number) {
        this.EventId = id;
        this.Title = title;
        this.Description = description;
        this.Location = location;
        this.EventDate = date;
        this.TicketPrice = TicketPrice;
        this.TotalTickets = TotalTickets;
        this.AvailableTickets = AvailableTickets;
    }
}
