import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Main, MyPage, RegisterPage, LoginPage, Qna, GroupPurchase, WriterQna} from './page';
import { Header } from './com';
import Border from './page/Border';
import { useSelector } from 'react-redux';



function App() {
   const isLogin = useSelector(state=> state.loginReducer.isLogin);

  // 로그인이 안됬으면 메인페이지로 보내버린다.  
  const Redirect = () => {if(isLogin === false){alert('마이페이지는 로그인해야 가능');}return isLogin === true ? <MyPage/> : <Navigate to ="/" />}
  // const RedirectBorder = () => {if(login == false){alert('게시판도 로그인해야 가능');}return login == true ? <Border/> : <Navigate to = "/" />}
  // const RedirectQna = () => {if(login == false){alert('질문하기도 로그인해야가능');}return login == true ? <Qna/> : <Navigate to = "/" />}
  // const RedirectGroup = () => {if(login == false){alert('공동구매도 로그인해야가능');}return login == true ? <GroupPurchase/> : <Navigate to = "/" />}

  return (
    <div className="App">
      <Header title="Portfolio" isLogin={isLogin}/>
      <Routes>
          <Route path="/" 
                element={<Main />} 
          />
          <Route path="/log"
                element={<LoginPage />} 
          />
          <Route path="/registerPage"
                element={<RegisterPage />} 
          />
          <Route path="/border"
                element={<Border  />}
          />
          <Route path="/mypage" 
                element={<Redirect />} 
          />
          <Route path="/qna" 
                element={<Qna />} 
          />
          <Route path="/grouppurchase" 
                 element={<GroupPurchase/>} 
          />
          <Route path="/writerQna" 
                 element={<WriterQna/>} 
          />
      </Routes>
    </div>
  );
}

export default App;
