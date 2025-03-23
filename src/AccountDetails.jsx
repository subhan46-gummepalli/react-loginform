import React from 'react'
import profile from "./assets/profile.jpeg"
import { FaCamera } from "react-icons/fa6";
function AccountDetails() {
    return (
        <div>
            <h1 > Account Settings</h1>
            <div className='bCont' >
                <div className='profCont'>
                    <div className='imgcont'>
                        <img className='profileIimage' src={profile} alt="profile image" />
                        <FaCamera className='iconstyle' />
                    </div>
                    <div>
                        <h3>Subhan G</h3>
                        <p>subhangummepalli786@mail.com</p>
                    </div>
                </div>
                <div className='paraCont'>
                    <p>Lorem ipsum amet, consectetur adipisicing elit.
                        Necessitatibus eaque non voluptatibus  aspernatur
                        doloribus distinctio  magnam modi ipsum.
                        Lorem ipsum amet, consectetur adipisicing elit.
                        Necessitatibus eaque non voluptatibus  aspernatur
                        doloribus distinctio  magnam modi ipsum. </p>

                </div>
                <hr />
            </div>
        </div>

    )
}

export default AccountDetails
