import React from "react";

let renderCount = 0;

interface IIsFiveProps {
    value: number
}
/**
 * difference useMemo and React.memo
 *  useMemo => will execute function only if dep.value is changed it does not care about rerendering
 * React.memo => rerender the Component iff the value has been changed
 * callback as second parameter you give extra restriction for rerenderig
 */
export default React.memo(function IsFive({ value }: IIsFiveProps) {
    console.warn(`🛑 is Five render: ${++renderCount}`);

    const getResult = React.useMemo<string>(() => {
        let i = 0;
        while (i < 600000000) i++;
        return value === 5 ? `✅ it's five` : `❌ it's not five`;
    }, [value]);

    return <h3>{getResult}</h3>
}, (prevProps, nextProps) => {
    if (nextProps.value === 5 || prevProps.value === 5) {
        return false; // should return false in order to call the render()
        // false =>  means prevProps !== nextProps
    }
    else {
        return true; // keep going without re render;
    }
});

// (prev, next) -> false > rerender
// (prev, next) -> true > keep going (no render)
