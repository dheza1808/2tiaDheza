import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);
    const [newCustomer, setNewCustomer] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        loyalty: "Bronze"
    });
    const [customers, setCustomers] = useState([
        { "id": "CUS001", "name": "Ahmad Sulaiman", "email": "ahmad@email.com", "phone": "081234567890", "loyalty": "Gold" },
        { "id": "CUS002", "name": "Budi Santoso", "email": "budi@email.com", "phone": "081234567891", "loyalty": "Silver" },
        { "id": "CUS003", "name": "Citra Dewi", "email": "citra@email.com", "phone": "081234567892", "loyalty": "Bronze" },
        { "id": "CUS004", "name": "Dian Permata", "email": "dian@email.com", "phone": "081234567893", "loyalty": "Gold" },
        { "id": "CUS005", "name": "Eko Prasetyo", "email": "eko@email.com", "phone": "081234567894", "loyalty": "Bronze" },
        { "id": "CUS006", "name": "Fira Hasanah", "email": "fira@email.com", "phone": "081234567895", "loyalty": "Silver" },
        { "id": "CUS007", "name": "Gunawan Wibowo", "email": "gunawan@email.com", "phone": "081234567896", "loyalty": "Gold" },
        { "id": "CUS008", "name": "Hana Kusuma", "email": "hana@email.com", "phone": "081234567897", "loyalty": "Bronze" },
        { "id": "CUS009", "name": "Irfan Maulana", "email": "irfan@email.com", "phone": "081234567898", "loyalty": "Silver" },
        { "id": "CUS010", "name": "Jasmine Putri", "email": "jasmine@email.com", "phone": "081234567899", "loyalty": "Gold" },
        { "id": "CUS011", "name": "Kurnia Sari", "email": "kurnia@email.com", "phone": "081234567810", "loyalty": "Bronze" },
        { "id": "CUS012", "name": "Lukman Hakim", "email": "lukman@email.com", "phone": "081234567811", "loyalty": "Silver" },
        { "id": "CUS013", "name": "Maya Anggraini", "email": "maya@email.com", "phone": "081234567812", "loyalty": "Gold" },
        { "id": "CUS014", "name": "Nanda Pratama", "email": "nanda@email.com", "phone": "081234567813", "loyalty": "Bronze" },
        { "id": "CUS015", "name": "Olivia Utami", "email": "olivia@email.com", "phone": "081234567814", "loyalty": "Silver" },
        { "id": "CUS016", "name": "Putra Nugraha", "email": "putra@email.com", "phone": "081234567815", "loyalty": "Gold" },
        { "id": "CUS017", "name": "Qori Azizah", "email": "qori@email.com", "phone": "081234567816", "loyalty": "Bronze" },
        { "id": "CUS018", "name": "Rudi Hermawan", "email": "rudi@email.com", "phone": "081234567817", "loyalty": "Silver" },
        { "id": "CUS019", "name": "Siti Nurhaliza", "email": "siti@email.com", "phone": "081234567818", "loyalty": "Gold" },
        { "id": "CUS020", "name": "Tono Wijaya", "email": "tono@email.com", "phone": "081234567819", "loyalty": "Bronze" },
        { "id": "CUS021", "name": "Umi Kalsum", "email": "umi@email.com", "phone": "081234567820", "loyalty": "Silver" },
        { "id": "CUS022", "name": "Vino Bastian", "email": "vino@email.com", "phone": "081234567821", "loyalty": "Gold" },
        { "id": "CUS023", "name": "Wati Susilawati", "email": "wati@email.com", "phone": "081234567822", "loyalty": "Bronze" },
        { "id": "CUS024", "name": "Xaverius Budi", "email": "xaverius@email.com", "phone": "081234567823", "loyalty": "Silver" },
        { "id": "CUS025", "name": "Yanti Setiawati", "email": "yanti@email.com", "phone": "081234567824", "loyalty": "Gold" },
        { "id": "CUS026", "name": "Zaki Abdullah", "email": "zaki@email.com", "phone": "081234567825", "loyalty": "Bronze" },
        { "id": "CUS027", "name": "Anita Rahayu", "email": "anita@email.com", "phone": "081234567826", "loyalty": "Silver" },
        { "id": "CUS028", "name": "Bambang Sutrisno", "email": "bambang@email.com", "phone": "081234567827", "loyalty": "Gold" },
        { "id": "CUS029", "name": "Cinta Laura", "email": "cinta@email.com", "phone": "081234567828", "loyalty": "Bronze" },
        { "id": "CUS030", "name": "Denny Sumargo", "email": "denny@email.com", "phone": "081234567829", "loyalty": "Silver" }
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCustomer({
            ...newCustomer,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Generate a new ID based on the last customer ID
        const lastId = customers[customers.length - 1].id;
        const lastNumber = parseInt(lastId.substring(3));
        const newId = `CUS${String(lastNumber + 1).padStart(3, '0')}`;
        
        const customerToAdd = {
            ...newCustomer,
            id: newId
        };
        
        setCustomers([...customers, customerToAdd]);
        
        // Reset form and close it
        setNewCustomer({
            id: "",
            name: "",
            email: "",
            phone: "",
            loyalty: "Bronze"
        });
        setShowForm(false);
    };

    return (
        <div>
            <div id="dashboard-container">
                <PageHeader
                    title="Customers"
                    breadcrumb={['Dashboard', 'Customers List']}
                >
                    <button 
                        id="add-button" 
                        className="bg-hijau text-white px-4 py-2 rounded-lg mr-4 text-xl"
                        onClick={() => setShowForm(true)}
                    >
                        Add New Customers
                    </button>
                </PageHeader>

                {showForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold">Add New Customer</h2>
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
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={newCustomer.name}
                                        onChange={handleInputChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={newCustomer.email}
                                        onChange={handleInputChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                        Phone
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={newCustomer.phone}
                                        onChange={handleInputChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loyalty">
                                        Loyalty Level
                                    </label>
                                    <select
                                        id="loyalty"
                                        name="loyalty"
                                        value={newCustomer.loyalty}
                                        onChange={handleInputChange}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="Bronze">Bronze</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Gold">Gold</option>
                                    </select>
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
                                        Save Customer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">Customer List</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full table-auto border-separate border-spacing-0 shadow-lg rounded-lg">
                            <thead>
                                <tr className="bg-green-300 text-gray-600">
                                    <th className="px-6 py-3 text-left border-b">ID</th>
                                    <th className="px-6 py-3 text-left border-b">Name</th>
                                    <th className="px-6 py-3 text-left border-b">Email</th>
                                    <th className="px-6 py-3 text-left border-b">Phone</th>
                                    <th className="px-6 py-3 text-left border-b">Loyalty</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-gray-700">
                                {customers.map((customer) => (
                                    <tr key={customer.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 border-b">{customer.id}</td>
                                        <td className="px-6 py-4 border-b">{customer.name}</td>
                                        <td className="px-6 py-4 border-b">{customer.email}</td>
                                        <td className="px-6 py-4 border-b">{customer.phone}</td>
                                        <td className="px-6 py-4 border-b">
                                            <span className={`px-2 py-1 rounded-full text-sm font-semibold 
                                                ${customer.loyalty === 'Gold' ? 'bg-yellow-500 text-white' :
                                                  customer.loyalty === 'Silver' ? 'bg-gray-400 text-white' :
                                                  'bg-red-400 text-white'}`}
                                            >
                                                {customer.loyalty}
                                            </span>
                                        </td>
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