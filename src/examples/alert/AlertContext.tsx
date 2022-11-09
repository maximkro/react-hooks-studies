import React, { useContext, useReducer } from "react";

interface AlertCtxProps {
    children?: React.ReactNode,
    visible?: boolean,
    toggle?: () => void;
}

const AlertContext = React.createContext<AlertCtxProps>({} as AlertCtxProps);

export const useAlert = () => {
    return useContext(AlertContext);
}

export const AlertProvider: React.FC<AlertCtxProps> = ({ children }) => {
    const [alert, setAlert] = React.useState(false);
    const toggle = () => { setAlert(prev => !prev) };
    return (
        <AlertContext.Provider value={{ visible: alert, toggle: toggle }}>{children}</AlertContext.Provider>
    )
}