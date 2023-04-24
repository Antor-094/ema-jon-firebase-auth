import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provides/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogIn = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        form.reset()
      signIn(email,password)
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error => {
        console.log(error.massage)
      })
    }
    return (
        <div className='form-container'>

            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required placeholder='Enter your email here' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required placeholder='Enter your password here' />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>new to ema-jon? <Link to='/signup'>Create a account</Link></small></p>
        </div>
    );
};

export default Login;