import {ReactNode} from "react";

export function Subjects(props:{children: ReactNode, onselect:(value: string) => void}) {

    return (
        <>
            <button onClick={() => {
                props.onselect(props.children as string)
            }}>{props.children}</button>
        </>
    );
}