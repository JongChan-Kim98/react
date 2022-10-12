import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='foot'><Link to>Email</Link></div>
      <div className='foot'><a href="https://www.instagram.com/nd_chan98/">Instargram</a></div>
      <div className='foot'><a href="https://www.facebook.com/JongChan2">Facebook</a>
      </div>
      <div className='foot'><a href="https://github.com/JongChan-Kim98?tab=repositories">GitHub</a>
      </div>
      <div className='foot'><a href="https://www.notion.so/73e530da8794485eb15768e5e627b6db">Notion</a></div>
    </div>
    </>
  )
}

export default Footer