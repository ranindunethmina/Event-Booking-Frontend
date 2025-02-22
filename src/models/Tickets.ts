export class Ticket {
    TicketID: string;
    EventID: string;
    Price: number;
    SeatNumber: string;
    BuyerName: string;

    constructor(ticketID: string, eventID: string, price: number, seatNumber: string, buyerName: string) {
        this.TicketID = ticketID;
        this.EventID = eventID;
        this.Price = price;
        this.SeatNumber = seatNumber;
        this.BuyerName = buyerName;
    }
}
