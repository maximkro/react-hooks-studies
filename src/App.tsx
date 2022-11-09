import React from 'react';
import { Main } from './Main';

const useInput = (initValue: any) => {
  const [value, setValue] = React.useState(initValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }
  return { value, onChange }
}

function App() {
  const input = useInput(' ');
  return (
    <div className={"container pt-3"}>
      <h1>{input.value}</h1>
      <input type="text" placeholder="write something" {...input} />
    </div>

  );
}

export default App;
