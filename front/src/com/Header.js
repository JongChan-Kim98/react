import React from 'react'
import { TbAlignJustified } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loginAction } from '../redux/middleware/loginAction';
import { useDispatch } from 'react-redux';

const Header = ({title, isLogin}) => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.loginReducer.id);

  const logOut = () =>{
    dispatch(loginAction.logOut());
}

  console.log('로그인상태 true / false [isLogin] : '+ isLogin);
  
  return (
    <>
      <div className='header menu SMN_effect-67'>
      <div><Link to = "/" data-hover="PORTFOLIO" >{title}</Link></div>
      <div className='headerIcon'><TbAlignJustified/></div>
      <div><Link to = '/border' data-hover="게시판" >게시판</Link></div>
      <div><Link to = '/mypage' data-hover="마이페이지">마이페이지</Link></div>
      <div><Link to = '/qna' data-hover="QnA">QnA</Link></div>
      <div><Link to = '/grouppurchase' data-hover="공동구매">공동구매</Link></div>
      
      { // 삼항연산하는부분
      isLogin ? (<><div className='welcomeUser'>{userName}환영함</div> <div className='loglocation'><Link to = '/log' data-hover="로그아웃" onClick={logOut}>로그아웃</Link></div></>) : (<div className='loglocation'><Link to = '/log' data-hover="로그인">로그인</Link></div>)
      }
      <div className='register'><Link to = '/registerPage' data-hover="회원가입">회원가입</Link></div>
    </div>

    </>
  )
}

export default Header