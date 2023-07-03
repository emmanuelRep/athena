import React from 'react'
import {styles} from './styles.css'

const Signin = () => {
  return (
    <body className='body'>
        <div className='container'>
            <form className='form'>
            
            <p className='title'>Sign in to Athena</p>
                <input
                    className='textfield' 
                    type='textarea'
                    placeholder='username'
                />
                <input
                    className='textfield' 
                    type='password'
                    placeholder='password'
                />
                <button className='signin-btn'>Sign in</button>
                
            </form>
        </div>
    </body>
  )
}

export default Signin
