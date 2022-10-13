import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='footer menu SMN_effect-67'>
      <div className='foot'><Link to = '/' data-hover="Email">Email</Link></div>
      <div className='foot'><a href="https://www.instagram.com/nd_chan98/" data-hover="Instargram">Instargram</a></div>
      <div className='foot'><a href="https://www.facebook.com/JongChan2" data-hover="Facebook">Facebook</a>
      </div>
      <div className='foot'><a href="https://github.com/JongChan-Kim98?tab=repositories" data-hover="GitHub">GitHub</a>
      </div>
      <div className='foot'><a href="https://www.notion.so/73e530da8794485eb15768e5e627b6db" data-hover="Notion">Notion</a></div>
    </div>
    </>
  )
}

export default Footer