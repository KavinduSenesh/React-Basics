import {ReactNode} from "react";

export function ButtonComponent(props : { children : ReactNode , onSelect : any, count : number}) {

    function handleClick() {
        if (props.children === "+") {
            props.onSelect(props.count + 1)
        } else if (props.children === "-") {
            props.onSelect(props.count - 1)
        }
    }

    return (
        <>
            <button onClick={() =>{handleClick()}}>{props.children}</button>
        </>
    )
}

