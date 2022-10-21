import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    return (
        <div className='form-container'>
            <h3 className='form-title'>Sign up</h3>
            <form>
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email'placeholder='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password'placeholder='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor='confirm'>Confirm Password</label>
                    <input type="password" name='confirm' placeholder='confirm password' required />
                </div>
                <input className='btn-submit' type="submit" value='Sign up' />
            </form>
            <p>already have an account ? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Signup;