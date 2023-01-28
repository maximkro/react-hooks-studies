import React, { ReactNode } from "react";
import { LevelContext } from "./LevelContext";

interface IChildren {
    level: number
    children: ReactNode
}

export const Section: React.FC<IChildren> = ({level, children}) => {
    return (
        <LevelContext.Provider value={{level: level}}>
            <section className="section">
                {children}
            </section>
        </LevelContext.Provider >
 
    )
}