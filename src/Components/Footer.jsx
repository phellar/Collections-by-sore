import React from 'react'
import './Footer.css'

const Footer = () => {
   const CurrentYear = new Date().getFullYear();

  return (
        <footer className='footer'> 
            <p>   ©    {CurrentYear}  Sore Adebisi  | All rights reserved</p>
        </footer>
  )
}

export default Footer