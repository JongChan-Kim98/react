import React,{useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { qnawriteAction } from '../redux/middleware/qnawriteAction';

const WriterQna = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const title = useRef();
  const content = useRef();
  const userName = useSelector(state => state.loginReducer.id);
  console.log("userName? = "+userName)

  let submitQna = (event) => {    
    // event.preventDefault()
    dispatch(qnawriteAction.postQna(title.value, content.value, userName));
    dispatch(qnawriteAction.enterQna());
    nav('/qna')
 }

  return (
    <>
      <div className='QnaWiterBox'>
        <form action="/writerQna" method='POST'>
          <div>제 목</div>
          <input type="text" name="title" onChange={(e)=>{title.value = e.target.value}} />
          <div>내 용</div>
          <textarea name="content" id="" cols="30" rows="10" onChange={(e)=>{content.value = e.target.value}}></textarea>
<br />
          <button type='submit' onClick={submitQna}>작성하기</button>
          <button type='' onClick={()=>{nav('/qna')}}>취소</button>
        </form>
      </div>
    </>
  )
}

export default WriterQna