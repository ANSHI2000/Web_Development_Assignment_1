/* Problem Statement 2
Create a class component that maintains a counter and provides buttons toincreaseand decrease the counter.
*/

//App.js:
import Counter from "./Counter";


function App() { return <Counter />;
}
export default App;



//Counter.js:
import React, { Component } from "react";


class Counter extends Component { constructor(props) {
super(props); this.state = { count: 0
};
}
increment = () => { this.setState({
count: this.state.count + 1
});
};
decrement = () => { this.setState({
count: this.state.count - 1

});
};
render() { return (
<div>
<h2>Counter: {this.state.count}</h2>
<button onClick={this.increment}>Increase</button>
<button onClick={this.decrement}>Decrease</button>
</div>
);
}
}
export default Counter;