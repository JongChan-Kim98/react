import React from 'react'
import { TbAlignJustified } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';

const Header = ({title, login, setLoginResult, inputs}) => {
  // console.log("해더" + login);
  let nav = useNavigate();
  const gologout = () => {
    setLoginResult(false);
    alert('로그아웃 되었습니다');
    nav('/'); // 지금 여기가 작동이 안되는데 왜지?
  } 
  console.log("로그인 상태는? : " + login );
  
  const returnName = inputs.find(function(data){
    return data.name 
  });

  return (
    <>
      {/* <div className='border' onClick={()=>{nav('/border')}}><a data-hover="게시판">게시판</a></div> */}
      {/* <div className='mypage' onClick={()=>{nav('/mypage')}}><a data-hover="마이페이지">마이페이지</a></div> */}
      {/* <div className='qna' onClick={()=>{nav('/qna')}}>QnA</div> */}
      {/* <div className='grouppurchase' onClick={()=>{nav('/grouppurchase')}}>공동구매</div> */}
      {/* <div className='register' onClick={()=>{nav('/registerPage')}}>회원가입</div> */}
    
    <div className='header menu SMN_effect-67'>
      <div><Link to = "/" data-hover="PORTFOLIO" >{title}</Link></div>
      <div className='headerIcon'><TbAlignJustified/></div>
      <div><Link to = '/border' data-hover="게시판" >게시판</Link></div>
      <div><Link to = '/mypage' data-hover="마이페이지">마이페이지</Link></div>
      <div><Link to = '/qna' data-hover="QnA">QnA</Link></div>
      <div><Link to = '/grouppurchase' data-hover="공동구매">공동구매</Link></div>
      
      { // 삼항연산하는부분
      login ? (<><div className='welcomeUser'>[{returnName.name}]환영함</div> <div className='loglocation'><Link to = '/log' data-hover="로그아웃" onClick={gologout}>로그아웃</Link></div></>) : (<div className='loglocation'><Link to = '/log' data-hover="로그인">로그인</Link></div>)
      }
      <div className='register'><Link to = '/registerPage' data-hover="회원가입">회원가입</Link></div>
    </div>

    </>
  )
}

export default Header