import {ReactNode} from "react";

export function Subject(props : {name : string, children : ReactNode}) {
    return (
        <>
            <h2>{props.name}</h2>
            <p>{props.children}</p>
        </>
    );
}



