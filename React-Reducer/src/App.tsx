import { useReducer, useState } from 'react';
import './App.css';
import { CustomerReducer } from './reducers/CustomerReducer.ts';
import { Customer } from './model/Customer.ts';

const initialCustomerState: Customer[] = [];

function App() {
    const [customer, dispatch] = useReducer(CustomerReducer, initialCustomerState);

    const [name, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone);
        dispatch({ type: "ADD_CUSTOMER", payload: newCustomer });
    }

    return (
        <>
            <header><h2>Customer Management</h2></header>
            <br/>

            <input type="text" placeholder="name" value={name} onChange={(e) => { setFirstName(e.target.value) }} />
            <input type="text" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type="text" placeholder="phone" value={phone} onChange={(e) => { setPhone(e.target.value) }} />

            <br/>
            <button onClick={addCustomer}>Add Customer</button>

            <br/>
            <br/>

            <h3>Customers</h3>
            <br/>

            {customer.map((customer: Customer, index: number) => (
                <div key={index}>
                    {customer.name} - {customer.email}
                </div>
            ))}
        </>
    );
}

export default App;