import React, { useContext, useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../provides/AuthProvider";
const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    setError("");
    // console.log(email,password,confirm)
    if (password !== confirm) {
      setError("You password did not match!!");
    }
    if (password <= 6) {
      setError("password must be up to or equal to 6 character!!");
    }
    createUser(email, password)
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.massage);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            required
            placeholder="Enter your email here"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            required
            placeholder="Enter your password here"
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id=""
            required
            placeholder="Enter your password here again"
          />
        </div>
        <input className="btn-submit" type="submit" value="SignUp" />
      </form>
      <p>
        <small>
          already have a account? <Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default SignUp;
