import React from 'react'
import { Link } from 'react-router-dom'

function Welcomepage() {
    return (
        <div className='cont'>
            <div className='p-text'>
                <h1>Welcome to PopX</h1>
                <p>Lorem ipsum dolor sit amet </p>
                <p> consectetur adipisicing elit.</p>
            </div>
            <div>
                <Link to={"/create-account"} className='createBtn'>
                    <button className='createBtnWP'> Create Account</button>
                </Link>
                <Link to={"/signin"} >
                    <button className='loginBtn'>Already Registered? Login</button></Link>
            </div>
        </div>
    )
}

export default Welcomepage
