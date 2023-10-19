import React from 'react';
import './SignIn.css';
import FormGroup from '../components/FormGroup';
import Socials from '../components/Socials';


const SignIn = ({handleAuthentication}) => {


  return (
    <div className='signin__page__container'>
            <a href="index.html" className='logo'>LOGO</a>

            <div className="form__container">
                <h1 className='board__logo'>Board.</h1>

                <FormGroup handleAuthentication={handleAuthentication}/>
            </div>

            <Socials />
    </div>
  )
}

export default SignIn;