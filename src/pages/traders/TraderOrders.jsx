import { useState } from "react";

export default function TraderOrders() {
    const [selectedOrder, setSelectedOrder] = useState(null);

    const orders = [
        {
            id: "ORD12345",
            traderBusinessName: "M.K. Poultry Traders",
            company: "FeatherFarms Ltd.",
            totalAmount: "₹25,000",
            status: "Complete",
            details: {
                driverName: "Rajesh Kumar",
                vehicleName: "MP09 XY 1234",
                quantityKg: 1000,
                perKgRate: 25,
                orderDate: "2025-06-05",
                orderComplete: true,
            },
        },
        {
            id: "ORD12346",
            traderBusinessName: "Om Traders",
            company: "Golden Chick Co.",
            totalAmount: "₹15,500",
            status: "Pending",
            details: {
                driverName: "Suresh Yadav",
                vehicleName: "MP07 GH 9876",
                quantityKg: 620,
                perKgRate: 25,
                orderDate: "2025-06-04",
                orderComplete: false,
            },
        },
    ];

    const statusColor = {
        Complete: "text-green-600",
        Pending: "text-yellow-600",
        Reject: "text-red-600",
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">Trader Orders</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-slate-900 border rounded">
                    <thead className="bg-slate-100 dark:bg-slate-800">
                        <tr>
                            <th className="text-left p-2">Order ID</th>
                            <th className="text-left p-2">Trader Business Name</th>
                            <th className="text-left p-2">Ordered Company</th>
                            <th className="text-left p-2">Total Amount</th>
                            <th className="text-left p-2">Status</th>
                            <th className="text-left p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b border-slate-200 dark:border-slate-700">
                                <td className="p-2">{order.id}</td>
                                <td className="p-2">{order.traderBusinessName}</td>
                                <td className="p-2">{order.company}</td>
                                <td className="p-2">{order.totalAmount}</td>
                                <td className={`p-2 font-medium ${statusColor[order.status]}`}>{order.status}</td>
                                <td className="p-2">
                                    <button
                                        className="text-blue-600 hover:underline"
                                        onClick={() => setSelectedOrder(order)}
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedOrder && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded shadow-lg w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">Order Details</h2>
                        <div className="space-y-2">
                            <p><strong>Driver Name:</strong> {selectedOrder.details.driverName}</p>
                            <p><strong>Vehicle Name:</strong> {selectedOrder.details.vehicleName}</p>
                            <p><strong>Quantity (KG):</strong> {selectedOrder.details.quantityKg}</p>
                            <p><strong>Per KG Rate:</strong> ₹{selectedOrder.details.perKgRate}</p>
                            <p><strong>Order Date:</strong> {selectedOrder.details.orderDate}</p>
                            <p><strong>Order Completed:</strong> {selectedOrder.details.orderComplete ? "Yes" : "No"}</p>
                        </div>
                        <div className="mt-4 text-right">
                            <button
                                onClick={() => setSelectedOrder(null)}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
