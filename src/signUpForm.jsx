import { useState } from "react";

export default function SignUpForm ({setToken}) {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);



const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("Hello 👋");
    try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {    
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });
const result = await response.json();
console.log(result);
if (result.token) {
    setToken(result.token);
    
} else {
     setError("Sign up failed.");
}
    } catch (error) {
      setError(error.message);
    }
  }


    return (
    <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username}
            onChange={(e) => setUsername(e.target.value)}/>
        </label>
        <label>
            Password: <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        
        </label>
        <button>Submit</button>
    </form>
    </>
    );
}