import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Main, MyPage, RegisterPage, LoginPage, Qna} from './page';
import { useState } from 'react';
import { Header } from './com';
import Border from './page/Border';

function App() {
   const [name, setName] = useState("");
   
   const userData =[{ 
    //  name : "기본닉네임",
    //  email : "admin@naver.com",
    //  password : "123"
   }];

    const [inputs, setInputs] = useState(userData);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log(inputs[0].name); : 기본닉네임
    // console.log(inputs[0].email); : admin@naver.com

    const userDataHandler = (userinput)=>{
      setInputs(preData => {
        return [userinput, ...preData]
      })

    }

  // const returnName = inputs.find(function(data){
  //   return data.name 
  // });

  // console.log("현재위치 : App.js 네임반환해줘 : "+ returnName.name)
    
  const[ login, setLoginResult ] = useState(false);

  // 로그인이 안됬으면 메인페이지로 보내버린다. 경로를 
  const Redirect = () => {
    if(login == false){
      alert('로그인해야가능');
    }
    return login == true ? <MyPage/> : <Navigate to ="/" /> 
  }
  const RedirectBorder = () => {
    if(login == false){
      alert('로그인해야가능');
    }
    return login == true ? <Border/> : <Navigate to = "/" />
  }
  const RedirectQna = () => {
    if(login == false){
      alert('로그인해야가능');
    }
    return login == true ? <Qna/> : <Navigate to = "/" />
  }

  return (
    <div className="App">
      <Header login = {login} title="Portfolio" inputs = {inputs} setLoginResult={setLoginResult}/>
      <Routes>
          <Route path="/" 
                element={<Main setLoginResult={setLoginResult} inputs={inputs} login={login}/>} 
          />
          <Route path="/log"
                element={<LoginPage email={email} password = {password} login ={login} setLoginResult={setLoginResult}/>} 
          />
          <Route path="/registerPage"
                element={<RegisterPage onAddData={userDataHandler} setName = {setName} setEmail = {setEmail} setPassword = {setPassword}  setInputs = {setInputs} inputs={inputs}/>} 
          />
          <Route path="/border"
                element={<RedirectBorder login={login} setLoginResult={setLoginResult} inputs={inputs} />}
          />
          <Route path="/mypage" 
                element={<Redirect login={setLoginResult} islogin={login} />} 
          />
          <Route path="/qna" 
                element={<RedirectQna />} 
          />
      </Routes>
    </div>
  );
}

export default App;

//ㅇㅇㅇ