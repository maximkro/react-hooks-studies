import React from 'react';
import { Main } from './Main';

const useInput = (initValue: any) => {
  const [value, setValue] = React.useState(initValue);
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

function App() {
  const input = useInput(' ');
  return (
    <div className={"container pt-3"}>
      <h1>{input.value}</h1>
      <input type="text" placeholder="write something" {...input.bind} />
      <button className="btn btn-warning" onClick={() => input.clear()}>clear</button>
    </div>

  );
}

export default App;
