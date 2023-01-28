import React, { useState } from "react";
import { CallbackCounter } from "./callback-counter/CallbackCounter";
import { Callback } from "./examples/Callback";
import { Section } from "./inheritance/Section";


function App() {
  const [text, setText] = useState('Hello');

  return (
    // <Section level={1}>
    //   <Callback/>
    // </Section>
    <button onClick={() => {
      console.log(text);
      setText('');
      
    }}>click me</button>
  );

}

export default App;
