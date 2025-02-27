import {useEffect, useState} from "react";
import {Trash2} from "react-feather";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.tsx";
import {deleteEvent, getAllEvents, saveEvent, updateEvent} from "../../reducers/EventReducer.ts";
import {Event as EventModel} from "../../models/Event.ts";

function Event() {
    const dispatch = useDispatch<AppDispatch>();
    const events = useSelector((state: RootState) => state.event);

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
        dispatch(saveEvent({EventId: id, Title: title, Location: location, EventDate: date, Description: description, TicketPrice: ticketPrice, TotalTickets: totalTickets, AvailableTickets: availableTickets}))
        resetForm()
    }

    const handleEdit = (event: EventModel) => {
        setId(event.EventId)
        setTitle(event.Title)
        setDate(event.EventDate)
        setLocation(event.Location)
        setDescription(event.Description)
        setTicketPrice(event.TicketPrice)
        setTotalTickets(event.TotalTickets)
        setAvailableTickets(event.AvailableTickets)
        setIsEditing(true)
    }

    const handleUpdate = () => {
        if (!title || !date || !location || !description || ticketPrice <= 0 || totalTickets <= 0 || availableTickets < 0) {
            alert("All fields are required and must be valid!")
            return
        }
        dispatch(updateEvent({EventId: id, Title: title, Location: location, EventDate: date, Description: description, TicketPrice: ticketPrice, TotalTickets: totalTickets, AvailableTickets: availableTickets}))
        resetForm()
    }

    const handleDelete = (eventId: number) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            dispatch(deleteEvent(eventId));
        }
    }

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

    useEffect(() => {
        dispatch(getAllEvents());
    });

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded" />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Event Location" value={location} onChange={(e) => setLocation(e.target.value)} className="border p-2 rounded" />
                <textarea placeholder="Event Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 rounded col-span-2" />
                <input type="number" placeholder="Ticket Price" value={ticketPrice} onChange={(e) => setTicketPrice(Number(e.target.value))} className="border p-2 rounded" />
                <input type="number" placeholder="Total Tickets" value={totalTickets} onChange={(e) => setTotalTickets(Number(e.target.value))} className="border p-2 rounded" />
                <input type="number" placeholder="Available Tickets" value={availableTickets} onChange={(e) => setAvailableTickets(Number(e.target.value))} className="border p-2 rounded" />
            </div>
            <div className="flex justify-end">
                {isEditing ? (
                    <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded mr-2">Update</button>
                ) : (
                    <button onClick={handleAdd} className="bg-green-500 text-white p-2 rounded mr-2">Add</button>
                )}
                {isEditing && (
                    <button onClick={resetForm} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
                )}
            </div>
            <table className="min-w-full table-auto border-collapse mt-6">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Title</th>
                    <th className="border px-4 py-2">Date</th>
                    <th className="border px-4 py-2">Location</th>
                    <th className="border px-4 py-2">Description</th>
                    <th className="border px-4 py-2">Ticket Price</th>
                    <th className="border px-4 py-2">Total Tickets</th>
                    <th className="border px-4 py-2">Available Tickets</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {events.map((event) => (
                    <tr key={event.EventId} onClick={() => handleEdit(event)} className="hover:cursor-pointer hover:bg-slate-600 hover:text-white">
                        <td className="border px-4 py-2">{event.EventId}</td>
                        <td className="border px-4 py-2">{event.Title}</td>
                        <td className="border px-4 py-2">{event.EventDate}</td>
                        <td className="border px-4 py-2">{event.Location}</td>
                        <td className="border px-4 py-2">{event.Description}</td>
                        <td className="border px-4 py-2">{event.TicketPrice}</td>
                        <td className="border px-4 py-2">{event.TotalTickets}</td>
                        <td className="border px-4 py-2">{event.AvailableTickets}</td>
                        <td className="border px-4 py-2 text-center">
                            <button onClick={() => handleDelete(event.EventId)} className="bg-red-500 text-white p-2 rounded-lg">
                                <Trash2 />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Event
