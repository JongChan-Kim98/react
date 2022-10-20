import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/middleware/loginAction';
import "../App.css";

const RegisterPage = () => {

  const idInput = useRef();
  const pwInput = useRef();
  const nameInput = useRef();
  const dispatch = useDispatch();

  let userRpw = "";

  const onConfirmPasswordHandler = (event) => {userRpw = event.currentTarget.value;}

  let nav = useNavigate();

  const onSubmit = (event) => {
    if(pwInput.value !== userRpw) {
      alert('비밀번호와 비밀번호확인은 같아야 합니다.');
    } else{ // 비밀번호 일치시 
      dispatch(loginAction.signUp(idInput.value, pwInput.value, nameInput.value));
     // nav('/log');
    }
    // console.log("nameInput:"+ nameInput.value );
  }

  return (
    <>
    <div className="loginregister">
      <form>
          <div><input name="name" type="text" placeholder="이름" onChange={(e)=>{nameInput.value = e.target.value}} className="loginregister__input" ref = {nameInput}/></div>
          <div><input name="id" type="text" placeholder="아이디"  onChange={(e)=>{idInput.value = e.target.value}} className="loginregister__input" ref = {idInput}/></div>
          <div><input autoComplete="off" name="password" type="password" placeholder="비밀번호"  onChange={(e)=>{pwInput.value = e.target.value}} className="loginregister__input"  ref = {pwInput}/></div>
          <div><input autoComplete="off"name="passwordVerify" type="password"  placeholder="비밀번호 확인"  onChange={onConfirmPasswordHandler} className="loginregister__input"/></div>
          <div><button type="submit" onClick={onSubmit} className="loginregister__button">계정 생성하기</button></div>
      </form>
    </div>
    </>
  );
}

export default RegisterPage;