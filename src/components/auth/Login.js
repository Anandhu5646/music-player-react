import React from 'react'
import './Login.css'
import { loginEndPoint } from '../../spotify'
export default function Login() {
  return (
    <div className='login-page'>
      <img src='https://static.vecteezy.com/system/resources/previews/022/101/104/non_2x/spotify-logo-transparent-free-png.png'
      className='logo'
      alt='login image'></img>
      <a href={loginEndPoint}>
        <div className='login-btn'>LOG IN</div>
      </a>
    </div>
  )
}
