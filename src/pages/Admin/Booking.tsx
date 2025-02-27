import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.tsx";
import {getAllBookings} from "../../reducers/BookingReducer.ts";

function Booking() {
    const dispatch = useDispatch<AppDispatch>();
    const bookings = useSelector((state: RootState) => state.booking);

    // const [id, setId] = useState(0)
    // const [customerId, setCustomerId] = useState<number | undefined>(undefined)
    // const [eventId, setEventId] = useState<number | undefined>(undefined)
    // const [status, setStatus] = useState("")
    // const [totalAmount, setTotalAmount] = useState(0)
    // const [isEditing, setIsEditing] = useState(false)

    // const handleAdd = () => {
    //     if (!customerId || !eventId || !status || totalAmount <= 0) {
    //         alert("All fields are required and must be valid!")
    //         return
    //     }
    //     dispatch(saveBooking({BookingID: id, CustomerID: customerId, EventID: eventId, Status: status, TotalAmount: totalAmount}))
    //     resetForm()
    // }
    //
    // const handleEdit = (booking: BookingModel) => {
    //     setId(booking.BookingID)
    //     setCustomerId(booking.CustomerID)
    //     setEventId(booking.EventID)
    //     setStatus(booking.Status)
    //     setTotalAmount(booking.TotalAmount)
    //     setIsEditing(true)
    // }
    //
    // const handleUpdate = () => {
    //     if (!customerId || !eventId || !status || totalAmount <= 0) {
    //         alert("All fields are required and must be valid!")
    //         return
    //     }
    //     dispatch(updateBooking({BookingID: id, CustomerID: customerId, EventID: eventId, Status: status, TotalAmount: totalAmount}))
    //     resetForm()
    // }
    //
    // const handleDelete = (bookingId: number) => {
    //     if (window.confirm("Are you sure you want to delete this booking?")) {
    //         dispatch(deleteBooking(bookingId));
    //     }
    // }
    //
    // const resetForm = () => {
    //     setId(0)
    //     setCustomerId(0)
    //     setEventId(0)
    //     setStatus("")
    //     setTotalAmount(0)
    //     setIsEditing(false)
    // }

    useEffect(() => {
        dispatch(getAllBookings());
    });

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Bookings</h2>
            {/*<div className="grid grid-cols-2 gap-4 mb-4">*/}
            {/*    <input type="number" placeholder="Customer ID" value={customerId} onChange={(e) => setCustomerId(Number(e.target.value))} className="border p-2 rounded" />*/}
            {/*    <input type="number" placeholder="Event ID" value={eventId} onChange={(e) => setEventId(Number(e.target.value))} className="border p-2 rounded" />*/}
            {/*    <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 rounded" />*/}
            {/*    <input type="number" placeholder="Total Amount" value={totalAmount} onChange={(e) => setTotalAmount(Number(e.target.value))} className="border p-2 rounded" />*/}
            {/*</div>*/}
            {/*<div className="flex justify-end">*/}
            {/*    {isEditing ? (*/}
            {/*        <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded mr-2">Update</button>*/}
            {/*    ) : (*/}
            {/*        <button onClick={handleAdd} className="bg-green-500 text-white p-2 rounded mr-2">Add</button>*/}
            {/*    )}*/}
            {/*    {isEditing && (*/}
            {/*        <button onClick={resetForm} className="bg-gray-500 text-white p-2 rounded">Cancel</button>*/}
            {/*    )}*/}
            {/*</div>*/}
            <table className="min-w-full table-auto border-collapse mt-6">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Customer ID</th>
                    <th className="border px-4 py-2">Event ID</th>
                    <th className="border px-4 py-2">Status</th>
                    <th className="border px-4 py-2">Total Amount</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {bookings.map((booking) => (
                    // <tr key={booking.BookingID} onClick={() => handleEdit(booking)} className="hover:cursor-pointer hover:bg-slate-600 hover:text-white">
                    <tr key={booking.BookingId} className="hover:bg-slate-600 hover:text-white">
                    <td className="border px-4 py-2">{booking.BookingId}</td>
                        <td className="border px-4 py-2">{booking.CustomerId}</td>
                        <td className="border px-4 py-2">{booking.EventId}</td>
                        <td className="border px-4 py-2">{booking.Status}</td>
                        <td className="border px-4 py-2">{booking.TotalAmount}</td>
                        {/*<td className="border px-4 py-2 text-center">*/}
                        {/*    <button onClick={() => handleDelete(booking.BookingID)} className="bg-red-500 text-white p-2 rounded-lg">*/}
                        {/*        <Trash2 />*/}
                        {/*    </button>*/}
                        {/*</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Booking;