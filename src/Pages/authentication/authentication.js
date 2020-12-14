import React from 'react'
import SignupForm from '../../Components/SignupForm/SignupForm';
import SigninForm from './../../Components/SigninForm/SigninForm';
import Signout from './../../Components/Signout/Signout';
const authentication = () => {
    return (
        <div>
            <h1>Auth Page</h1>
            <SigninForm/>
            <SignupForm/>
            <Signout/>
        </div>
    )
}

export default authentication;
