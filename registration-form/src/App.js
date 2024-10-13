import './App.css';
import InputField from './components/InputField';
import React, {useState} from "react";

function App() {

  const [submitted, setSubmitted]=useState(false)

  const inputFields = [
    {className: "firstName", type: "text", label: "First Name:"},
    {className: "lastName", type: "text", label: "Last Name:"},
    {className: "username", type: "text", label: "UserName:"},
    {className: "email", type: "email", label: "Email:"},
    {className: "phoneNumber", type: "tel", label: "Phone Number:"},
    {className: "password", type: "password", label: "Password:"}
  ]

  const [inputValues, setInputValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(inputValues);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value}))
  }

  return (
    <div className="App">
      { submitted ? (
        <h2>Thank you for your registration!</h2>
      ) : (
      <form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <InputField
          key={index}
          className={inputField.className}
          type={inputField.type}
          label={inputField.label}
          value={inputValues[inputField.className] || ""}
          onChange={handleChange}
        />
        ))}
        <button type="submit">Register</button>
      </form>
)}
    </div>
  );
}

export default App;
