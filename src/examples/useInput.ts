import React, { useState } from "react";

export const useInput = (initValue: any) => {
    const [value, setValue] = useState(initValue);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const clear = () => setValue('');
    return {
        bind: { value, onChange },
        value,
        clear
    }
}
