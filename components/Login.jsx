"use client"
import { useState } from "react";
import Link from "next/link";

const Login = () => {
    const person = {
        email: "mhmtyz42@outlook.com",
        password: "mehmet123",
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email !== person.email || password !== person.password) alert("Wrong email or password!")
        setEmail('');
        setPassword('');
    };
  return (
    <div className="login">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        { (email === person.email && password === person.password) ? (
        <Link href="/user">
            <button type="submit" className="btn">
                Login
            </button>
        </Link>): (
            <button type="submit" className="btn">
                Login
            </button>
        ) 
        }
      </form>
    </div>
  )
}

export default Login