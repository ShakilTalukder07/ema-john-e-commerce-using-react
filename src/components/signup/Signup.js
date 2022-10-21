import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/UserContext";
import './Signup.css'

const Signup = () => {

    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.length > 6) {
            setError('Password should be at least 6 characters')
            return;
        }
        if (password !== confirm) {
            setError("Password and confirm password didn't matched. ")
            return;
        }


        createUser(email,password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset()
            })
            .catch(error => console.error(error));
    }


    return (
        <div className='form-container'>
            <h3 className='form-title'>Sign up</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' placeholder='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' placeholder='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type="password" name='confirm' placeholder='confirm password' required />
                </div>
                <input className='btn-submit' type="submit" value='Sign up' />
            </form>
            <p>already have an account ? <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Signup;