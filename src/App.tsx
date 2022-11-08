import React from 'react';
import { Main } from './Main';
import { Alert } from './examples/alert/Alert';
import { AlertProvider } from './examples/alert/AlertContext';


function App() {

  return (
    <AlertProvider>
      <div className="container pt-3">
        <Alert />
        <Main />
      </div>
    </AlertProvider>

  );
}

export default App;
