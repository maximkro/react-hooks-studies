import React from 'react';

function complexAlg(num: number): number {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return (num * 2);
}

function App() {
  const [number, setNumber] = React.useState(42);
  const [colored, setColored] = React.useState(false);

  // used for caching stuffs it keeps the same element the same for each render 

  const computed = React.useMemo(() => {
    return complexAlg(number);
  }, [number]);

  const style = { color: colored ? "darkred" : "black" };

  React.useEffect(() => {
    console.log('style changed');
  }, [style]);
  return (
    <>
      <h1 style={style}>number: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)} className="btn btn-success"> + </button>
      <button onClick={() => setNumber(prev => prev - 1)} className="btn btn-danger"> - </button>
      <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">setColor</button>
    </>
  );
}

export default App;
