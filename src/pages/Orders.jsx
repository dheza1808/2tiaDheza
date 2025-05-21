import React, { useState } from 'react';
import PageHeader from "../components/PageHeader";

export default function Orders() {
    const [showForm, setShowForm] = useState(false);
    const [newOrder, setNewOrder] = useState({
        customerName: "",
        status: "Pending",
        totalPrice: "",
        orderDate: new Date().toISOString().substr(0, 10)
    });
    
    const [orders, setOrders] = useState([
        { "id": "ORD001", "customerName": "Ahmad Sulaiman", "status": "Completed", "totalPrice": 1250000, "orderDate": "2025-04-01" },
        { "id": "ORD002", "customerName": "Budi Santoso", "status": "Pending", "totalPrice": 750000, "orderDate": "2025-04-02" },
        { "id": "ORD003", "customerName": "Citra Dewi", "status": "Cancelled", "totalPrice": 500000, "orderDate": "2025-04-03" },
        { "id": "ORD004", "customerName": "Dian Permata", "status": "Completed", "totalPrice": 1750000, "orderDate": "2025-04-04" },
        { "id": "ORD005", "customerName": "Eko Prasetyo", "status": "Pending", "totalPrice": 325000, "orderDate": "2025-04-05" },
        { "id": "ORD006", "customerName": "Fira Hasanah", "status": "Completed", "totalPrice": 4250000, "orderDate": "2025-04-06" },
        { "id": "ORD007", "customerName": "Gunawan Wibowo", "status": "Cancelled", "totalPrice": 870000, "orderDate": "2025-04-07" },
        { "id": "ORD008", "customerName": "Hana Kusuma", "status": "Pending", "totalPrice": 1450000, "orderDate": "2025-04-08" },
        { "id": "ORD009", "customerName": "Irfan Maulana", "status": "Completed", "totalPrice": 950000, "orderDate": "2025-04-09" },
        { "id": "ORD010", "customerName": "Jasmine Putri", "status": "Pending", "totalPrice": 2250000, "orderDate": "2025-04-10" },
        { "id": "ORD011", "customerName": "Kurnia Sari", "status": "Cancelled", "totalPrice": 550000, "orderDate": "2025-04-11" },
        { "id": "ORD012", "customerName": "Lukman Hakim", "status": "Completed", "totalPrice": 3450000, "orderDate": "2025-04-12" },
        { "id": "ORD013", "customerName": "Maya Anggraini", "status": "Pending", "totalPrice": 1650000, "orderDate": "2025-04-13" },
        { "id": "ORD014", "customerName": "Nanda Pratama", "status": "Completed", "totalPrice": 2750000, "orderDate": "2025-04-14" },
        { "id": "ORD015", "customerName": "Olivia Utami", "status": "Cancelled", "totalPrice": 890000, "orderDate": "2025-04-15" },
        { "id": "ORD016", "customerName": "Putra Nugraha", "status": "Pending", "totalPrice": 1950000, "orderDate": "2025-04-16" },
        { "id": "ORD017", "customerName": "Qori Azizah", "status": "Completed", "totalPrice": 750000, "orderDate": "2025-04-17" },
        { "id": "ORD018", "customerName": "Rudi Hermawan", "status": "Cancelled", "totalPrice": 450000, "orderDate": "2025-04-18" },
        { "id": "ORD019", "customerName": "Siti Nurhaliza", "status": "Pending", "totalPrice": 3250000, "orderDate": "2025-04-19" },
        { "id": "ORD020", "customerName": "Tono Wijaya", "status": "Completed", "totalPrice": 1250000, "orderDate": "2025-04-20" },
        { "id": "ORD021", "customerName": "Umi Kalsum", "status": "Cancelled", "totalPrice": 675000, "orderDate": "2025-04-21" },
        { "id": "ORD022", "customerName": "Vino Bastian", "status": "Pending", "totalPrice": 4550000, "orderDate": "2025-04-22" },
        { "id": "ORD023", "customerName": "Wati Susilawati", "status": "Completed", "totalPrice": 1850000, "orderDate": "2025-04-23" },
        { "id": "ORD024", "customerName": "Xaverius Budi", "status": "Pending", "totalPrice": 2350000, "orderDate": "2025-04-24" },
        { "id": "ORD025", "customerName": "Yanti Setiawati", "status": "Cancelled", "totalPrice": 750000, "orderDate": "2025-04-25" },
        { "id": "ORD026", "customerName": "Zaki Abdullah", "status": "Completed", "totalPrice": 1650000, "orderDate": "2025-04-26" },
        { "id": "ORD027", "customerName": "Anita Rahayu", "status": "Pending", "totalPrice": 950000, "orderDate": "2025-04-27" },
        { "id": "ORD028", "customerName": "Bambang Sutrisno", "status": "Completed", "totalPrice": 3950000, "orderDate": "2025-04-28" },
        { "id": "ORD029", "customerName": "Cinta Laura", "status": "Cancelled", "totalPrice": 1250000, "orderDate": "2025-04-29" },
        { "id": "ORD030", "customerName": "Denny Sumargo", "status": "Pending", "totalPrice": 2850000, "orderDate": "2025-04-30" }
    ]);

    // Format currency for Indonesian Rupiah
    const formatRupiah = (amount) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // For the totalPrice field, convert string to number
        if (name === "totalPrice") {
            // Remove non-numeric characters and parse as integer
            const numericValue = value.replace(/\D/g, '');
            setNewOrder({
                ...newOrder,
                [name]: numericValue ? parseInt(numericValue) : ""
            });
        } else {
            setNewOrder({
                ...newOrder,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Generate a new ID based on the last order ID
        const lastId = orders[orders.length - 1].id;
        const lastNumber = parseInt(lastId.substring(3));
        const newId = `ORD${String(lastNumber + 1).padStart(3, '0')}`;
        
        const orderToAdd = {
            ...newOrder,
            id: newId,
            totalPrice: parseInt(newOrder.totalPrice) || 0
        };
        
        setOrders([...orders, orderToAdd]);
        
        // Reset form and close it
        setNewOrder({
            customerName: "",
            status: "Pending",
            totalPrice: "",
            orderDate: new Date().toISOString().substr(0, 10)
        });
        setShowForm(false);
    };

    return (
        <div>
            <div id="dashboard-container">
                <PageHeader
                    title="Orders"
                    breadcrumb={['Dashboard', 'Orders List']}
                >
                    <button 
                        id="add-button" 
                        className="bg-hijau text-white px-4 py-2 rounded-lg mr-4 text-xl"
                        onClick={() => setShowForm(true)}
                    >
                        Add New Order
                    </button>
                </PageHeader>

                {showForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold">Add New Order</h2>
                                <button 
                                    onClick={() => setShowForm(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customerName">
                                        Customer Name
                                    </label>
                                    <input
                                        type="text"
                                        id="customerName"
                                        name="customerName"
                                        value={newOrder.customerName}
                                        onChange={handleInputChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                                        Status
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={newOrder.status}
                                        onChange={handleInputChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Cancelled">Cancelled</option>
                                    </select>
                                </div>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalPrice">
                                        Total Price (IDR)
                                    </label>
                                    <input
                                        type="text"
                                        id="totalPrice"
                                        name="totalPrice"
                                        value={newOrder.totalPrice === "" ? "" : formatRupiah(newOrder.totalPrice).replace(/[^\d,]/g, '')}
                                        onChange={handleInputChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                        placeholder="1000000"
                                    />
                                </div>
                                
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderDate">
                                        Order Date
                                    </label>
                                    <input
                                        type="date"
                                        id="orderDate"
                                        name="orderDate"
                                        value={newOrder.orderDate}
                                        onChange={handleInputChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                
                                <div className="flex items-center justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Save Order
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">Order List</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full table-auto border-separate border-spacing-0 shadow-lg rounded-lg">
                            <thead>
                                <tr className="bg-green-300 text-gray-600">
                                    <th className="px-6 py-3 text-left border-b">ID</th>
                                    <th className="px-6 py-3 text-left border-b">Customer Name</th>
                                    <th className="px-6 py-3 text-left border-b">Status</th>
                                    <th className="px-6 py-3 text-left border-b">Total Price</th>
                                    <th className="px-6 py-3 text-left border-b">Order Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-gray-700">
                                {orders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 border-b">{order.id}</td>
                                        <td className="px-6 py-4 border-b">{order.customerName}</td>
                                        <td className="px-6 py-4 border-b">
                                            <span className={`px-2 py-1 rounded-full text-sm font-semibold 
                                                ${order.status === 'Completed' ? 'bg-green-500 text-white' :
                                                order.status === 'Pending' ? 'bg-yellow-500 text-white' :
                                                'bg-red-500 text-white'}`}
                                            >
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 border-b">{formatRupiah(order.totalPrice)}</td>
                                        <td className="px-6 py-4 border-b">{order.orderDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}