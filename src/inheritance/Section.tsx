import React, { ReactNode } from "react";
import { LevelContext } from "./LevelContext";

interface IChildren {
    level: number
    children: ReactNode
}

export const Section: React.FC<IChildren> = (props) => {
    return (
        <LevelContext.Provider value={{level: props.level}}>
            <section className="section">
                {props.children}
            </section>
        </LevelContext.Provider >
 
    )
}