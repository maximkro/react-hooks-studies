import React from "react";
import { useAlert } from "./examples/alert/AlertContext";

export const Main: React.FC = () => {
    const { toggle } = useAlert();
    return (
        <>
            <h1>hello Example Context</h1>
            <button onClick={toggle} className="btn btn-success">show alert</button>
        </>
    );
}