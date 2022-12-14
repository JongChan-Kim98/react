import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Main, MyPage, RegisterPage, LoginPage, Qna, GroupPurchase, WriterQna} from './page';
import { Header } from './com';
import Border from './page/Border';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { qnawriteAction } from './redux/middleware/qnawriteAction';

function App() {
   const isLogin = useSelector(state=> state.loginReducer.isLogin);
   const aa = useSelector(state => state.loginReducer.Picture);
   const user_Name = useSelector(state => state.loginReducer.user_Name)
   const dispatch = useDispatch();
   
   const border = useSelector(state=>state.qnaborderReducer.post)
   let isUpdate = useRef(false);
   let isUpdate2 = useRef(false);
   let isUpdate3 = useRef(false);

   const [addPost,setAddPost] = useState(null);
   const [posts,setposts] = useState(null);
   const [pageNation, setPageNation] = useState(null);
   const [pageCount,setPageCount] = useState(0);



   useEffect(() => {
      dispatch(qnawriteAction.boardStart());
    },[]);


    useEffect(() => {
      if(!isUpdate3.current)
      {   
          isUpdate3.current = true;
          return;
      }
      setAddPost(border);
    },[border]);
  
    useEffect(() => {
      if(!isUpdate2.current)
      {   
          isUpdate2.current = true;
          return;
      }
      setPageCount(addPost?.length / 10);
      // setPageCount(Math.ceil(addPost?.length / 10));
      console.log("안녕ㅋ");
      console.log(addPost);
    },[addPost]);
  
    useEffect(() => {
      if(!isUpdate.current)
      {
          isUpdate.current = true;
          return;
      }
      pageNations();
      postsArray();
    },[pageCount]);

    const pageNations = () => {
      const postArray1 = [];
      const postArray2 = [];
      const aa = Math.ceil(pageCount);
      for(let k = 1; k <= aa; k++){
        postArray1.push(k);
      }
      for(let i = 0; i < postArray1?.length; i+=5){
        postArray2.push(postArray1.slice(i,i + 5));
      }
      setPageNation(postArray2);
    };
    const postsArray = () => {
      const postArray = [];
      for(let i = 0; i < addPost?.length; i += 10){
        postArray.push(addPost.slice(i, i + 10));
      }
      setposts(postArray);
      // console.log("ㅎㅇㅎㅇ"+postArray);
    };


      // console.log("aa :" +aa);
      // console.log("user_Name :" +user_Name);

  // 로그인이 안됬으면 메인페이지로 보내버린다.  
  const Redirect = () => {if(isLogin === false){alert('마이페이지는 로그인해야 가능');}return isLogin === true ? <MyPage  aa={aa} user_Name ={user_Name} /> : <Navigate to ="/" />}
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
                element={<Qna pageNation={pageNation} posts={posts} />} 
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
