/* Problem Statement 3
Create a functional component that maintains a counter and provides buttons to increase, decrease and reset the counter.
*/

function Counter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{margin: '5px', padding: '10px'}}>Increase</button>
      <button onClick={decrement} style={{margin: '5px', padding: '10px'}}>Decrease</button>
      <button onClick={reset} style={{margin: '5px', padding: '10px'}}>Reset</button>
    </div>
  );
}

function App() {
  return <Counter />;
}