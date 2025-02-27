import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.tsx";

export default function Bookings() {
    const {id} = useParams<{ id: string }>();
    const events = useSelector((state: RootState) => state.event);
    const [event, setEvent] = useState<any>(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const foundEvent = events.find((e) => e.EventID === parseInt(id || "0"));
        setEvent(foundEvent);
    }, [id, events]);

    const handleBooking = () => {
        if (quantity <= 0 || quantity > event?.AvailableTickets) {
            alert("Invalid ticket quantity!");
            return;
        }
        alert(`Successfully booked ${quantity} tickets for ${event.Title}`);
    };

    if (!event) {
        return <p className="text-center text-gray-500 mt-10">Event not found!</p>;
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Book Tickets for {event.Title}</h1>
            <p className="text-gray-700 mb-2">Date: {event.EventDate}</p>
            <p className="text-gray-700 mb-2">Location: {event.Location}</p>
            <p className="text-gray-700 mb-4">Price: {event.TicketPrice} LKR</p>

            <label className="block mb-2">Number of Tickets:</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}
                   className="border p-2 w-full rounded mb-4"/>

            <button onClick={handleBooking} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Confirm Booking
            </button>
        </div>
    );
}
