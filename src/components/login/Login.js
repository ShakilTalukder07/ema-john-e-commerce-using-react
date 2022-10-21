import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './Login.css'

const Login = () => {

    const { signIn } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email;
        const password = form.password;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))

    }

    return (
        <div className='form-container'>
            <h3 className='form-title'>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder='password' required />
                </div>
                <input className='btn-submit' type="submit" value='Login' />
            </form>
            <p>New to ema john <Link to='/signup'>Create a new account</Link></p>
        </div>
    );
};

export default Login;