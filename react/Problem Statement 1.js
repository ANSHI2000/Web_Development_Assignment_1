/* Problem Statement 1
Create a functional component that accepts props and displays a personalized  message.
*/

function Greeting(props) {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>Welcome to React.</p>
    </div>
  );
}

function App() {
  return (
    <div style={{padding: '20px'}}>
      <h1>React Component Example</h1>
      <Greeting name="Shabdarth" />
      <Greeting name="User" />
    </div>
  );
}