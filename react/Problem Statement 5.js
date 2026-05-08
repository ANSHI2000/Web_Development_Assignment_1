/* Problem Statement 5
Create a component with a form that updates the state based on user input.
*/

function UserForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  return (
    <div style={{padding: '20px', maxWidth: '400px', margin: '0 auto'}}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '15px'}}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{width: '100%', padding: '8px'}}
            required
          />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{width: '100%', padding: '8px'}}
            required
          />
        </div>
        <div style={{marginBottom: '15px'}}>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{width: '100%', padding: '8px'}}
            required
          />
        </div>
        <button type="submit" style={{width: '100%', padding: '10px', background: '#667eea', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
          Submit
        </button>
      </form>
      {submitted && <p style={{marginTop: '15px', color: 'green'}}>Form submitted successfully!</p>}
    </div>
  );
}

function App() {
  return <UserForm />;
}