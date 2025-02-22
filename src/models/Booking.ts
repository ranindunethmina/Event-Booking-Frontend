export class Booking {
    BookingID: string;
    EventID: string;
    UserID: string;
    TicketCount: number;
    TotalPrice: number;

    constructor(bookingID: string, eventID: string, userID: string, ticketCount: number, totalPrice: number) {
        this.BookingID = bookingID;
        this.EventID = eventID;
        this.UserID = userID;
        this.TicketCount = ticketCount;
        this.TotalPrice = totalPrice;
    }
}