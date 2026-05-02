/* Problem Statement 3
Create a functional component that maintains a counter and provides buttonstoincrease, decrease and reset the counter.
*/

//App.js:
import Counter from "./Counter"; function App() {
return <Counter />;
}
export default App;



//Counter.js:
import React, { useState } from "react"; function Counter() {
const [count, setCount] = useState(0); const increment = () => { setCount(count + 1);
};


const decrement = () => { setCount(count - 1);
};
const reset = () => { setCount(0);
};
return (
<div>
<h2>Counter: {count}</h2>


<button onClick={increment}>Increase</button>
<button onClick={decrement}>Decrease</button>

<button onClick={reset}>Reset</button>
</div>
);
}
export default Counter;