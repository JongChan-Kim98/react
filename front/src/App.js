import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Main, MyPage, RegisterPage, LoginPage, Qna, GroupPurchase} from './page';
import { useState } from 'react';
import { Header } from './com';
import Border from './page/Border';

function App() {
   const [name, setName] = useState("");
   
   const userData =[{ 
//      name : "관리자",
//      email : "1",
//      password : "1"
   }];

    const [inputs, setInputs] = useState(userData);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

//      console.log("이메일"+inputs[0].email); 
//      console.log("비번"+inputs[0].password);
   console.log("유저데이터 : " + inputs[{}]);

    // inputs에 userData 
    const userDataHandler = (userinput)=>{
      setInputs(preData => {
        return [userinput, ...preData]
      })
    }
    
  const[ login, setLoginResult ] = useState(false);

  // 로그인이 안됬으면 메인페이지로 보내버린다.  
  const Redirect = () => {if(login == false){alert('마이페이지는 로그인해야 가능');}return login == true ? <MyPage/> : <Navigate to ="/" />}
  const RedirectBorder = () => {if(login == false){alert('게시판도 로그인해야 가능');}return login == true ? <Border/> : <Navigate to = "/" />}
  const RedirectQna = () => {if(login == false){alert('질문하기도 로그인해야가능');}return login == true ? <Qna/> : <Navigate to = "/" />}
//   const RedirectGroup = () => {if(login == false){alert('공동구매도 로그인해야가능');}return login == true ? <GroupPurchase/> : <Navigate to = "/" />}

  return (
    <div className="App">
      <Header login = {login} title="Portfolio" inputs = {inputs} setLoginResult={setLoginResult}/>
      <Routes>
          <Route path="/" 
                element={<Main setLoginResult={setLoginResult} inputs={inputs} login={login}/>} 
          />
          <Route path="/log"
                element={<LoginPage email={email} password = {password} login ={login} setLoginResult={setLoginResult} inputs={inputs}/>} 
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
          <Route path="/grouppurchase" 
                element={<GroupPurchase/>} 
          />
      </Routes>
    </div>
  );
}

export default App;
