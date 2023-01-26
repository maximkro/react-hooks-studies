import {createContext} from 'react';

interface ILevelContext {
    level: number
}

export const LevelContext = createContext<ILevelContext>({} as ILevelContext)
