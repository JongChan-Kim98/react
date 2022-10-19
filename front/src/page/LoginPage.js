import React, {useRef} from 'react'
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/middleware/loginAction';

function LoginPage() {
  const idInput = useRef();
  const pwInput = useRef();
  
  const dispatch = useDispatch();

  let loginButton = (event) => {    
     event.preventDefault();
     dispatch(loginAction.login(idInput.value, pwInput.value));
  }
  
  return (
    <>
      <div className="loginregister">
        <form>
            <div>
              <input type="text" name='id' placeholder="아이디" ref={idInput} onChange={(e)=>{idInput.value = e.target.value}} className="loginregister__input"/>
            </div>
            <div>
              <input type="password" name='password' autoComplete="off"  placeholder="비밀번호" ref={pwInput} onChange={(e)=>{pwInput.value = e.target.value}} className="loginregister__input"/>
            </div>
            <div>
              <button type="submit" className="loginregister__button" onClick={loginButton}>로그인</button>
            </div>
        </form>
      </div>
      </>
    );
  }

export default LoginPage;