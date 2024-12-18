import './App.css'
import {useState} from "react";
import {ButtonComponent} from "./component/ButtonComponent.tsx";

function App() {

    const[count, setCount] = useState(0)

    return(
        <>
            <h1>{count}</h1>
            <ButtonComponent onSelect={setCount} count={count}>+</ButtonComponent>
            <ButtonComponent onSelect={setCount} count={count}>-</ButtonComponent>
        </>
    )
}

export default App