import React, { useState } from "react";

function Register() {

const [formData, setFormData] = useState({
username: "",
firstName: "",
lastName: "",
email: "",
password: ""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = (e) => {
e.preventDefault();
console.log("User Registered:", formData);
};

return (

<div style={{textAlign:"center", marginTop:"40px"}}>

<h2>Sign Up</h2>

<form onSubmit={handleSubmit}>

<div>
<input
type="text"
name="username"
placeholder="User Name"
onChange={handleChange}
required
/>
</div>

<div>
<input
type="text"
name="firstName"
placeholder="First Name"
onChange={handleChange}
required
/>
</div>

<div>
<input
type="text"
name="lastName"
placeholder="Last Name"
onChange={handleChange}
required
/>
</div>

<div>
<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
required
/>
</div>

<div>
<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
required
/>
</div>

<br/>

<button type="submit">Register</button>

</form>

</div>

);
}
export default Register;
