import React, { useState } from "react";
import { CallbackCounter } from "./callback-counter/CallbackCounter";
import { Callback } from "./examples/Callback";
import { Section } from "./inheritance/Section";
import { TasksContainer } from "./use-reduce/TasksContainer";


function App() {

  return (
    // <Section level={1}>
    //   <Callback/>
    // </Section>
    <TasksContainer/>
  );

}

export default App;
