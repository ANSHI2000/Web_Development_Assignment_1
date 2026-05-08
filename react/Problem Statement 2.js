/* Problem Statement 2
Create a class component that maintains a counter and provides buttons to increase and decrease the counter.
*/

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{padding: '20px', textAlign: 'center'}}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment} style={{margin: '5px', padding: '10px'}}>Increase</button>
        <button onClick={this.decrement} style={{margin: '5px', padding: '10px'}}>Decrease</button>
      </div>
    );
  }
}

function App() {
  return <Counter />;
}