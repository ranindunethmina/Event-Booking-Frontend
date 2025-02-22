import { useEffect, useState } from "react";
import { Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store.tsx";
import { deleteTicket, getAllTickets, saveTicket } from "../reducers/TicketsReducer.ts";
import { Ticket as TicketModel } from "../models/Tickets.ts";

function Tickets() {
    const dispatch = useDispatch<AppDispatch>();
    const tickets = useSelector((state: RootState) => state.tickets);

    const [ticketPrice, setTicketPrice] = useState<number>(0);
    const [seatNumber, setSeatNumber] = useState<string>("");
    const [buyerName, setBuyerName] = useState<string>("");
    const [eventId, setEventId] = useState<string>("");

    useEffect(() => {
        dispatch(getAllTickets());
    }, [dispatch]);

    const handleAddTicket = () => {
        if (!eventId || !ticketPrice || !seatNumber || !buyerName) {
            alert("All ticket details are required!");
            return;
        }
        const ticketId = `${eventId}-${Math.random().toString(36).substr(2, 9)}`;
        dispatch(saveTicket(new TicketModel(ticketId, eventId, ticketPrice, seatNumber, buyerName)));
        resetForm();
    };

    const handleDeleteTicket = (ticketId: string) => {
        if (window.confirm("Are you sure you want to delete this ticket?")) {
            dispatch(deleteTicket(ticketId));
        }
    };

    const resetForm = () => {
        setEventId("");
        setTicketPrice(0);
        setSeatNumber("");
        setBuyerName("");
    };

    return (
        <div className="p-6">
            {/*<h2 className="text-lg font-bold mb-4">Manage Tickets</h2>*/}
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    name="eventId"
                    placeholder="Event ID"
                    value={eventId}
                    onChange={(e) => setEventId(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    name="ticketPrice"
                    placeholder="Ticket Price"
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(Number(e.target.value))}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="seatNumber"
                    placeholder="Seat Number"
                    value={seatNumber}
                    onChange={(e) => setSeatNumber(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="buyerName"
                    placeholder="Buyer Name"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="border p-2 rounded"
                />
            </div>
            <button
                onClick={handleAddTicket}
                className="bg-green-500 text-white p-2 rounded"
            >
                Add Ticket
            </button>

            <table className="min-w-full table-auto border-collapse mt-6">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Ticket ID</th>
                    <th className="border px-4 py-2">Event ID</th>
                    <th className="border px-4 py-2">Price</th>
                    <th className="border px-4 py-2">Seat Number</th>
                    <th className="border px-4 py-2">Buyer Name</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {tickets.map((ticket) => (
                    <tr key={ticket.TicketID}>
                        <td className="border px-4 py-2">{ticket.TicketID}</td>
                        <td className="border px-4 py-2">{ticket.EventID}</td>
                        <td className="border px-4 py-2">{ticket.Price}</td>
                        <td className="border px-4 py-2">{ticket.SeatNumber}</td>
                        <td className="border px-4 py-2">{ticket.BuyerName}</td>
                        <td className="border px-4 py-2 text-center">
                            <button
                                onClick={() => handleDeleteTicket(ticket.TicketID)}
                                className="bg-red-500 text-white p-2 rounded-lg"
                            >
                                <Trash2 />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tickets;
