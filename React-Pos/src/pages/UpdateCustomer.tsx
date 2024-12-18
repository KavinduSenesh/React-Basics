import { useContext, useEffect, useState } from "react";
import { CustomerContext } from "../component/CustomerProvider.tsx";
import { Customer } from "../model/Customer.ts";
import { useNavigate, useParams } from "react-router";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);
    const { email } = useParams();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        const customer = customers.find((c) => c.email === email);
        if (customer) {
            setName(customer.name);
            setPhone(customer.phone);
        }
    }, [email, customers]);

    function handleUpdate() {
        const updatedCustomers = customers.map((customer) =>
            customer.email === email ? { ...customer, name, mobile: phone } : customer
        );
        setCustomers(updatedCustomers);
        navigate('/');
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <header className="mb-6">
                <h2 className="text-2xl font-bold text-gray-700">Update Customer</h2>
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
                    onClick={handleUpdate}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Update Customer
                </button>
            </form>
        </div>
    );
}
