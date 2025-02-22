import {useEffect, useState} from "react";
import {Trash2} from "react-feather";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.tsx";
import {deleteEvent, getAllEvents, saveEvent, updateEvent} from "../reducers/EventReducer.ts";
import {Event as EventModel} from "../models/Event.ts";

function Event() {
    const dispatch = useDispatch<AppDispatch>();
    const events = useSelector((state: RootState) => state.event);

    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleAdd = () => {
        if (!name || !date || !location || !description) {
            alert("All fields are required!");
            return;
        }
        dispatch(saveEvent(new EventModel(id, name, location, date, description)));
        resetForm();
    };

    const handleEdit = (event: EventModel) => {
        setId(event.EventID);
        setName(event.Name);
        setDate(event.Date);
        setLocation(event.Location);
        setDescription(event.Description);
        setIsEditing(true);
    };

    const handleUpdate = () => {
        if (!name || !date || !location || !description) {
            alert("All fields are required!");
            return;
        }
        dispatch(updateEvent(new EventModel(id, name, location, date, description)));
        resetForm();
    };

    const handleDelete = (eventId: string) => {
        if (window.confirm("Are you sure you want to delete this event?")) {
            dispatch(deleteEvent(eventId));
        }
    };

    const resetForm = () => {
        setId("");
        setName("");
        setDate("");
        setLocation("");
        setDescription("");
        setIsEditing(false);
    };

    useEffect(() => {
        dispatch(getAllEvents());
    }, [dispatch]);

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Event Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Event Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 rounded"
                />
                <textarea
                    name="description"
                    placeholder="Event Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="border p-2 rounded col-span-2"
                />
            </div>
            <div className="flex justify-end">
                {isEditing ? (
                    <button
                        onClick={handleUpdate}
                        className="bg-blue-500 text-white p-2 rounded mr-2"
                    >
                        Update
                    </button>
                ) : (
                    <button
                        onClick={handleAdd}
                        className="bg-green-500 text-white p-2 rounded mr-2"
                    >
                        Add
                    </button>
                )}
                {isEditing && (
                    <button
                        onClick={resetForm}
                        className="bg-gray-500 text-white p-2 rounded"
                    >
                        Cancel
                    </button>
                )}
            </div>
            <table className="min-w-full table-auto border-collapse mt-6">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Event Name</th>
                    <th className="border px-4 py-2">Date</th>
                    <th className="border px-4 py-2">Location</th>
                    <th className="border px-4 py-2">Description</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {events.map((event) => (
                    <tr
                        key={event.EventID}
                        onClick={() => handleEdit(event)}
                        className="hover:cursor-pointer hover:bg-slate-600 hover:text-white"
                    >
                        <td className="border px-4 py-2">{event.EventID}</td>
                        <td className="border px-4 py-2">{event.Name}</td>
                        <td className="border px-4 py-2">{event.Date}</td>
                        <td className="border px-4 py-2">{event.Location}</td>
                        <td className="border px-4 py-2">{event.Description}</td>
                        <td className="border px-4 py-2 text-center">
                            <button
                                onClick={() => handleDelete(event.EventID)}
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

export default Event;
