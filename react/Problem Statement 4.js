/* Problem Statement 4
Create a functional component that displays a running clock and the current date.
*/
//App.js:
import Clock from "./Clock"; function App() {
return (
<div>
<Clock />
</div>
);
}
export default App;



//Clock.js:
import React, { useState, useEffect } from "react";


function Clock() {
const [time, setTime] = useState(new Date());


useEffect(() => {
const timer = setInterval(() => { setTime(new Date());
}, 1000);
return () => clearInterval(timer);
}, []);


return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
<h1>Current Time</h1>
<h2>{time.toLocaleTimeString()}</h2>

<h1>Current Date</h1>
<h2>{time.toLocaleDateString()}</h2>
</div>
);
}
export default Clock;