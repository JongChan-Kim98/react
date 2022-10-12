import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Header} from '../com'

function LoginPage({email, password, setLoginResult}) {

  
  const [bid, setbid] = useState("");
  const [bpw, setbpw] = useState("");

  
  const onEmailHandler = (event) => {
    setbid(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setbpw(event.currentTarget.value);
}
  
  // 회원가입된 유저의 정보를 담은 props를 받아와 로그인 페이지에서 입력된 결과 값이랑 같은지 비교하고 결과 값을 내보냄

  let nav = useNavigate();

  let gomain = () => {    
    if((bid == email) && (bpw == password)){
      alert("환영합니다.");
      setLoginResult(true);
      nav('/');
    } else{
      alert("아이디와 비밀번호가 틀립니다.");
      setbid("");
      setbpw("");
    }
  }
  
  return (
    <>
      <div class="loginregister">
        <form>
            <div><input name="email" type="email" placeholder="이메일"  onChange={onEmailHandler} value={bid} class="loginregister__input"/></div>
            <div><input name="password" type="password" placeholder="비밀번호" onChange={onPasswordHandler} value={bpw} class="loginregister__input"/></div>
            <div><button type="submit" class="loginregister__button" onClick={gomain}>로그인</button></div>
        </form>
      </div>
      </>
    );
  }

export default LoginPage;