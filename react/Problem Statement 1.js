/* Problem Statement 1
Create a functional component that accepts props and displays a personalizedmessage.
  */

// App.js

import React from "react"; function Greeting(props) { return (
<div>
<h2>Hello, {props.name}!</h2>
<p>Welcome to React.</p>
</div>
);
}
function App() { return (
<div>
<Greeting name="Shabdarth" />
</div>
);
}
export default App;