import React, { useContext } from 'react'
import './Footer.css'
import {Context} from '../../Context/Context'

const Footer = () => {
  const{ assets } = useContext(Context);
  
  return (
    <div className='footer'>
      <div className='footer-container'>

        <img src={assets.logo} alt='...' />
        <p>For the latest updates, subscribe to our newsletter and get exclusive news, giveaways and freebies</p>  

        <form className='footer-scriber'>
          <input type='text' placeholder='Your Email Address' />
          <button>SUBSCRIBE</button>
        </form>

      </div>
    </div>
  )
}

export default Footer
