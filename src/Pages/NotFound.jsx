import React from 'react'
import './NotFound.css'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
        <Header/>
        <section className='not-section'>
            <div className="container">
                <div className="not-box">
                  <h1> 404 </h1>
                  <p>Page Not Found</p>
                  <div className="btn-box-1">
                    <Link to={'/'} className='cta-1'>Back to Home</Link>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default NotFound