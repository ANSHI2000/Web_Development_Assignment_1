/* Problem Statement 5
Create a component with a form that updates the state based on user input.
*/


//App.js:
import UserForm from "./UserForm"; function App() {
return (
<div>
<UserForm />
</div>
);}
export default App;



//UserForm.js:
import React, { useState } from "react"; function UserForm() {
const [formData, setFormData] = useState({ name: "",
email: "", password: ""
});
const handleChange = (e) => { const { name, value } = e.target; setFormData((prevData) => ({
...prevData, [name]: value
}));
};
const handleSubmit = (e) => { e.preventDefault(); // prevent page reload

console.log("Form Data:", formData);
};
return (
<div style={{ textAlign: "center", marginTop: "40px" }}>
<h2>User Form</h2>
<form onSubmit={handleSubmit}>
<div>
<input type="text" name="name"
placeholder="Enter Name" value={formData.name} onChange={handleChange}
/>
</div>
<div>
<input type="email" name="email"
placeholder="Enter Email" value={formData.email} onChange={handleChange}
/>
</div>
<div>
<input type="password" name="password"
placeholder="Enter Password"

value={formData.password} onChange={handleChange}
/>
</div>
<button type="submit">Submit</button>
</form>
{/* Live Preview */}
<h3>Preview:</h3>
<p>Name: {formData.name}</p>
<p>Email: {formData.email}</p>
</div>
);
}
export default UserForm;