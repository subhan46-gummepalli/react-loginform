import React from 'react'
import { Link } from 'react-router-dom';


function Signinpage() {
    return (
        <div>
            <div className='p-text'>
                <h1>Signin  to  your </h1>
                <h1> PopX Account</h1>
                <p>Lorem ipsum dolor sit amet </p>
                <p> consectetur adipisicing elit.</p>

                <fieldset className='fieldadjust'>
                    <legend>Email Address <span>*</span></legend>
                    <input className='inputc' type="email" placeholder=' Enter email address' />
                </fieldset>

                <br />
                <fieldset className='fieldadjust'>
                    <legend>Password<span>*</span></legend>
                    <input className='inputc' type="password" placeholder=' Enter Password' />
                </fieldset>
                <Link to={"/account-details"} >
                    <button className='signinloginBtn'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Signinpage
