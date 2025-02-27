export class Payment {
    PaymentId: number;
    BookingId: number;
    Amount: number;
    Method: string;
    Status: string;

    constructor(payemntId: number, bookingId: number, amount: number, method: string, status: string) {
        this.PaymentId = payemntId;
        this.BookingId = bookingId;
        this.Amount = amount;
        this.Method = method;
        this.Status = status;
    }
}