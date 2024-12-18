import { useContext } from "react";
import { CustomerContext } from "../component/CustomerProvider.tsx";
import { useNavigate } from "react-router";
import "./Dashboard.css";

export function Dashboard() {
    const navigate = useNavigate();
    const [customers, setCustomers] = useContext(CustomerContext);

    const handleDelete = (email) => {
        setCustomers(customers.filter((customer) => customer.email !== email));
        navigate("/");
    };

    const handleUpdate = (email) => {
        navigate(`/update/${email}`);
    };

    return (
        <div className="p-6">
            <h1 className="poppins-bold text-3xl text-gray-700 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Customers Section */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Customers</h2>
                    {customers.length > 0 ? (
                        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
                            <thead className="bg-gray-100">
                            <tr>
                                <th className="custom-table-td font-semibold">Name</th>
                                <th className="custom-table-td font-semibold">Email</th>
                                <th className="custom-table-td font-semibold">Phone</th>
                                <th className="custom-table-td font-semibold">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.map((customer, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="custom-table-td">{customer.name}</td>
                                    <td className="custom-table-td">{customer.email}</td>
                                    <td className="custom-table-td">{customer.mobile}</td>
                                    <td className="custom-table-td">
                                        <button
                                            onClick={() => handleUpdate(customer.email)}
                                            className="px-3 py-1 text-white bg-orange-500 rounded mr-2 hover:bg-orange-600"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDelete(customer.email)}
                                            className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-600">No customers found.</p>
                    )}
                </section>

                {/* Items Section */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Items</h2>
                    <p className="text-gray-600">This section is under development.</p>
                </section>
            </div>
        </div>
    );
}
