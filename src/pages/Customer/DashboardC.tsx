import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.tsx";
import {useEffect, useState} from "react";
import {getAllEvents, saveEvent} from "../../reducers/EventReducer.ts";
import {Event as EventModel} from "../../models/Event.ts";
import {useNavigate} from "react-router-dom";

export default function Dashboard() {
    const dispatch = useDispatch<AppDispatch>();
    const events = useSelector((state: RootState) => state.event);
    const navigate = useNavigate();

    const [id, setId] = useState(0)
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [ticketPrice, setTicketPrice] = useState(0)
    const [totalTickets, setTotalTickets] = useState(0)
    const [availableTickets, setAvailableTickets] = useState(0)
    const [isEditing, setIsEditing] = useState(false)

    const handleAdd = () => {
        if (!title || !date || !location || !description || ticketPrice <= 0 || totalTickets <= 0 || availableTickets < 0) {
            alert("All fields are required and must be valid!")
            return
        }
        dispatch(saveEvent({EventID: id, Title: title, Location: location, EventDate: date, Description: description, TicketPrice: ticketPrice, TotalTickets: totalTickets, AvailableTickets: availableTickets}))
        resetForm()
    }

    const handleEdit = (event: EventModel) => {
        setId(event.EventID)
        setTitle(event.Title)
        setDate(event.EventDate)
        setLocation(event.Location)
        setDescription(event.Description)
        setTicketPrice(event.TicketPrice)
        setTotalTickets(event.TotalTickets)
        setAvailableTickets(event.AvailableTickets)
        setIsEditing(true)
    }

    // const handleUpdate = () => {
    //     if (!title || !date || !location || !description || ticketPrice <= 0 || totalTickets <= 0 || availableTickets < 0) {
    //         alert("All fields are required and must be valid!")
    //         return
    //     }
    //     dispatch(updateEvent({EventID: id, Title: title, Location: location, EventDate: date, Description: description, TicketPrice: ticketPrice, TotalTickets: totalTickets, AvailableTickets: availableTickets}))
    //     resetForm()
    // }

    // const handleDelete = (eventId: number) => {
    //     if (window.confirm("Are you sure you want to delete this event?")) {
    //         dispatch(deleteEvent(eventId));
    //     }
    // }

    const resetForm = () => {
        setId(0)
        setTitle("")
        setDate("")
        setLocation("")
        setDescription("")
        setTicketPrice(0)
        setTotalTickets(0)
        setAvailableTickets(0)
        setIsEditing(false)
    }
    const handleBooking = (event: EventModel) => {
        navigate(`/booking/${event.EventID}`);
    }

    useEffect(() => {
        dispatch(getAllEvents());
    });

    return (
        // <div className="p-6">
        //     <h1>Event Booking System</h1>
        // </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {events.length === 0 ? (
                <p className="col-span-full text-center text-gray-500">No events available</p>
            ) : (
                events.map((event) => (
                    <div key={event.EventID}
                         className="bg-white shadow-md rounded-lg p-4 relative hover:shadow-lg transition">
                        <h2 className="text-lg font-semibold">{event.Title}</h2>
                        <p className="text-gray-600 text-sm">📅 {event.EventDate}</p>
                        <p className="text-gray-700 mt-2">📍 {event.Location}</p>
                        <p className="text-gray-500 text-sm mt-2">{event.Description}</p>
                        <div className="mt-4">
                            <span className="text-blue-500 font-bold">{event.TicketPrice} LKR</span>
                            <span className="text-gray-500 ml-2">Upwards</span>
                        </div>

                        <div className="flex justify-between mt-4">
                            <button onClick={() => handleBooking(event)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                Buy Tickets
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}