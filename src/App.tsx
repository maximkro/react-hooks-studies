import React from "react";
import { CallbackCounter } from "./callback-counter/CallbackCounter";
import { Callback } from "./examples/Callback";
import { Section } from "./inheritance/Section";


function App() {
  return (
    <Section level={1}>
      <Callback/>
    </Section>
  );

}

export default App;
