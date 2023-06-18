import React, { useState } from 'react'
import styles from './AuthLLayer.module.css'
import Logo from '../../images/adFeed_logo.png'
import Login from '../Login/Login';
import MFAVerification from '../MFAVerification/MFAVerification';
import SetUpRequest from '../SetUpRequest/SetUpRequest';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import ResetPassword from '../ResetPassword/ResetPassword';



const AuthLLayer = () => {

  const [type, setType] = useState<string>('Login')
  return (
    <div className={styles.leftSide}>
      {type === 'MFAVerification' && (
        <MFAVerification />
      )}
      {type === 'Login' && (
        <div className='d-flex flex-column w-100 px-4'>
          <div className='my-5 '>
            <img src={Logo} alt="AdFeed Logo" />
          </div>
          <Login type={type} setType={setType} />
          {/* <MFAVerification/> */}
          {/* <SetUpRequest/> */}
          {/* <ForgotPassword/> */}
          {/* <ResetPassword/> */}
          <div className='text-center mt-auto'>
            <p>©Feedback Advisory 2023</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default AuthLLayer