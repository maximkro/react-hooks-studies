import React, { useState } from 'react';
import ListClassCmp from './ListClassCmp';
import { ListFncCmp } from './ListFncCmp';
import { ListUseRef } from './ListUseRef';
import { Memo } from './examples/Memo';
import { MemoCounter } from './memo-counter/MemoCounter';
import { Buttons } from './callback.counter/Buttons';


function App() {

  const [visible, setVisible] = useState<boolean | null>(true);
  const [count, setCount] = React.useState<number>(0);

  const Plus = React.useCallback(() => { setCount(prev => prev + 1) }, [setCount]);
  const Minus = React.useCallback(() => { setCount(prev => prev - 1) }, [setCount]);

  return (
    // <div className="container col-2">
    //   {visible && <ListUseRef />}
    //   <button className="btn btn-success" onClick={() => setVisible(prev => !prev)}>setvisible</button>
    // </div>

    <>
      <h1>{count}</h1>
      <Buttons onMinus={Minus} onPlus={Plus} />
    </>
  );

}

export default App;
