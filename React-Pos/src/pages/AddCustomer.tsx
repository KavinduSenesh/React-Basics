import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { CustomerContext } from "../component/CustomerProvider.tsx";
import { Customer } from "../model/Customer.ts";

export function AddCustomer() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, email, phone);
        setCustomers((customers) => [...customers, newCustomer]);
        navigate('/');
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <header className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700">Add Customer</h2>
            </header>

            <form className="space-y-4">
                <div>
                    <label className="block text-gray-600 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-600 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-600 font-medium mb-1">Phone</label>
                    <input
                        type="text"
                        placeholder="Enter phone number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Add Customer
                </button>
            </form>
        </div>
    );
}
