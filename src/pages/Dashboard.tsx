// export default function Dashboard() {
//   return (
//     <div className="p-6">
//       <h1>Event Booking System</h1>
//     </div>
//   )
// }
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
    const [stats, setStats] = useState({
        totalSales: 0,
        totalBookings: 0,
        upcomingEvents: [],
    });

    useEffect(() => {
        // Simulate fetching data from backend
        setTimeout(() => {
            setStats({
                totalSales: 2500,
                totalBookings: 120,
                upcomingEvents: [
                    { id: 1, title: "Music Concert", date: "2025-03-15" },
                    { id: 2, title: "Tech Conference", date: "2025-04-10" },
                ],
            });
        }, 1000);
    }, []);

    const salesData = [
        { month: "Jan", sales: 500 },
        { month: "Feb", sales: 700 },
        { month: "Mar", sales: 900 },
        { month: "Apr", sales: 400 },
        { month: "May", sales: 1000 },
    ];

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-white rounded-lg shadow-md text-lg font-semibold">
                    💰 Total Sales: ${stats.totalSales}
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md text-lg font-semibold">
                    🎟️ Total Bookings: {stats.totalBookings}
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md text-lg font-semibold">
                    📅 Upcoming Events:
                    <ul className="mt-2 text-sm">
                        {stats.upcomingEvents.map((event) => (
                            <li key={event.id}>
                                {event.title} - {event.date}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Sales Chart */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">📊 Ticket Sales Overview</h2>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={salesData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#4F46E5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
