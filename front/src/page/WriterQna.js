import React from 'react';
import { useNavigate } from 'react-router-dom';



const WriterQna = () => {
  const nav = useNavigate();

  return (
    <>
      <div className='QnaWiterBox'>
        <form action="" method='POST'>
          <div>제 목</div>
          <input type="" />
          <div>내 용</div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
<br />
          <button type='submit'>작성하기</button><button type='' onClick={()=>{nav('/qna')}}>취소</button>
        </form>
      </div>
    </>
  )
}

export default WriterQna