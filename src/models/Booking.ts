export class Booking {
    BookingId: number;
    CustomerId: number;
    EventId: number;
    Status: string;
    TotalAmount: number;

    constructor(bookingID: number, CustomerId: number, eventID: number, status: string, totalAmount: number) {
        this.BookingId = bookingID;
        this.CustomerId = CustomerId;
        this.EventId = eventID;
        this.Status = status;
        this.TotalAmount = totalAmount;
    }
}