/* Problem Statement 4
Create a functional component that displays a running clock and the current date.
*/

function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h2>Digital Clock</h2>
      <h3 style={{fontSize: '48px', color: '#667eea'}}>{time.toLocaleTimeString()}</h3>
      <p>{time.toLocaleDateString()}</p>
    </div>
  );
}

function App() {
  return <Clock />;
}