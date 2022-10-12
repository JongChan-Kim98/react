import React from 'react'
import { TbAlignJustified } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';

const Header = ({title, login, setLoginResult, inputs}) => {
  // console.log("해더" + login);
  let nav = useNavigate();
 
  let  nav4 = useNavigate();
  const gologout = () => {
    setLoginResult(false);
    alert('로그아웃 되었습니다');
    nav4('/')
  } 

  const returnName = inputs.find(function(data){
    return data.name 
  });

  return (
    <>
    
    <div className='header'>
      <div><Link to = "/" >{title}</Link></div>
      <div className='headerIcon'><TbAlignJustified/></div>
      <div className='border' onClick={()=>{nav('/border')}}>게시판</div>
      <div className='mypage' onClick={()=>{nav('/mypage')}}>마이페이지</div>
      <div className='qna' onClick={()=>{nav('/qna')}}>QnA</div>
      <div className='grouppurchase' onClick={()=>{nav('/grouppurchase')}}>공동구매</div>
      
      { // 삼항연산자
      login ? (<><div className='welcomeUser'>[{returnName.name}]환영함</div> <div className='loglocation' onClick ={gologout}>로그아웃</div></>) : (<div className='loglocation' onClick ={()=>{nav('/log')}}>로그인</div>)
      }
      <div className='register' onClick={()=>{nav('/registerPage')}}>회원가입</div>
    </div>

    </>
  )
}

export default Header