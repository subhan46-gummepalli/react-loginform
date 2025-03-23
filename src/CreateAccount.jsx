import React from 'react'
import { Link } from 'react-router-dom'

function CreateAccount() {
    return (
        <div>
            <div className='p-text'>
                <h1>Create your </h1>
                <h1> PopX Account</h1>
                <fieldset className='fieldadjust'>
                    <legend>Full Name <span>*</span></legend>
                    <input className='inputc' type="text" placeholder=' Enter Full Name' />
                </fieldset>
                <br />
                <fieldset className='fieldadjust'>
                    <legend>Phone No <span>*</span></legend>
                    <input className='inputc' type="tele" placeholder=' Enter Phone number' /></fieldset>

                <br />
                <fieldset className='fieldadjust'>
                    <legend>Email Address <span>*</span></legend>
                    <input className='inputc' type="email" placeholder=' Enter email address' />
                </fieldset>

                <br />
                <fieldset className='fieldadjust'>
                    <legend>Passward<span>*</span></legend>
                    <input className='inputc' type="password" placeholder=' Enter Password' />
                </fieldset>

                <br />
                <fieldset className='fieldadjust'>
                    <legend>Company Name <span>*</span></legend>
                    <input className='inputc' type="text" placeholder=' Company Name' />
                </fieldset>

                <br />
                <br />
                <tr>
                    <td><label htmlFor="Are you an Agency?">Are you an Agency?<span>*</span></label></td>
                </tr>
                <br />
                <tr>
                    <td><input className='select' type="radio" />Yes</td>
                    <td><input type="radio" />No</td>
                </tr>
                <br />
                 <Link to={"/signin"} >
                 <button className='btnCreate'>Create Account</button></Link>
                
            </div>
        </div>
    )
}

export default CreateAccount
