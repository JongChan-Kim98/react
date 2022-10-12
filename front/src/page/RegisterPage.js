import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css";

const RegisterPage = ({setName,setEmail,setPassword, onAddData}) => {

  let userName = "";
  let userEmail = "";
  let userPw = "";
  let userRpw = "";

  const onNameHandler = (event) => {
    userName = event.currentTarget.value;
  }
  const onEmailHandler = (event) => {
    userEmail = event.currentTarget.value;
  }

  const onPasswordHandler = (event) => {
    userPw = event.currentTarget.value;
  }

  const onConfirmPasswordHandler = (event) => {
    userRpw = event.currentTarget.value;
  }

  let nav = useNavigate();

  const onSubmit = (event) => {
    const userData = {
      name : userName,
      email : userEmail,
      password : userPw
    }

    if(userPw !== userRpw) {
      // event.preventDefault();
      alert('비밀번호와 비밀번호확인은 같아야 합니다.');
    } else{ // 로그인 시 가져가야할 값들 
      alert('회원가입 ㅊㅋ')
      setName(userName);
      setEmail(userEmail);
      setPassword(userPw);
      onAddData(userData);
      nav('/log');
    }
    
  }

  return (
    <>
    <div class="loginregister">
      <form>
          <div><input name="name" type="text" placeholder="이름" onChange={onNameHandler} class="loginregister__input"/></div>
          <div><input name="email" type="email" placeholder="이메일"  onChange={onEmailHandler} class="loginregister__input"/></div>
          <div><input name="password" type="password" placeholder="비밀번호"  onChange={onPasswordHandler} class="loginregister__input"/></div>
          <div><input name="passwordVerify" type="password"  placeholder="비밀번호 확인"  onChange={onConfirmPasswordHandler} class="loginregister__input"/></div>
          <div><button type="submit" onClick={onSubmit} class="loginregister__button">계정 생성하기</button></div>
      </form>
    </div>
    </>
  );
}

export default RegisterPage;