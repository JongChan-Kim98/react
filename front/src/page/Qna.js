import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';


const Qna = ({pageNation,posts}) => {

  const [limit, setLimit] = useState(0);
  const [limitPage, setLimitPage] = useState(0);
  const [pageNationCss,setPageNationCss] = useState("");  
  const [pageNationCss1,setPageNationCss1] = useState("");
  const [pageNationCss2,setPageNationCss2] = useState("");
  const [pageNationCss3,setPageNationCss3] = useState("");
  const [pageNationCss4,setPageNationCss4] = useState("");

  const prev = () => {
    console?.log(posts[0][0])
    if(limit == 0){
      setLimit(0);
      alert("첫 페이지 입니다?.")
    }
    else{
      setLimit(limit - 1);
    }
  }
  const next = () => {
    if(limit == (pageNation?.length-1)){
      setLimit(pageNation?.length-1); 
      alert("마지막 페이지 입니다?.")
    }
    else{
      setLimit(limit + 1);
    }
  }


  const nation1= () => {
    scroll();
    setLimitPage(pageNation[limit][0]-1);
    setPageNationCss("pageNationCount");
    setPageNationCss1("");
    setPageNationCss2("");
    setPageNationCss3("");
    setPageNationCss4("");
  }
  const nation2= () => {
    scroll();
    setLimitPage(pageNation[limit][1]-1);
    setPageNationCss("");
    setPageNationCss1("pageNationCount");
    setPageNationCss2("");
    setPageNationCss3("");
    setPageNationCss4("");
  }
  const nation3= () => {
    scroll();
    setLimitPage(pageNation[limit][2]-1);
    setPageNationCss("");
    setPageNationCss1("");
    setPageNationCss2("pageNationCount");
    setPageNationCss3("");
    setPageNationCss4("");
  }
  const nation4= () => {
    scroll();
    setLimitPage(pageNation[limit][3]-1);
    setPageNationCss("");
    setPageNationCss1("");
    setPageNationCss2("");
    setPageNationCss3("pageNationCount");
    setPageNationCss4("");
  }
  const nation5= () => {
    scroll();
    setLimitPage(pageNation[limit][4]-1);
    setPageNationCss("");
    setPageNationCss1("");
    setPageNationCss2("");
    setPageNationCss3("");
    setPageNationCss4("pageNationCount");
  }



  return (
    <>
     <hr className="hr-2"></hr>
<br />
<br />
      <div>
          <div>
           <ul className='QnaNavBar'>
                <li><Link to = ''>Best</Link></li>
                <li><Link to = ''>Web</Link></li>
                <li><Link to = ''>Server</Link></li>
                <li><Link to = ''>Hardware</Link></li>
                <li><Link to = '/writerQna'>글쓰기</Link></li>
            </ul>
          </div>

<br />
<br />
          <hr className="hr-2"></hr>
<br />
          <div className='QnaNavBar'>
            <div>번호</div>
            <div>제목</div>
            <div>작성자</div>
            <div>작성일</div>
          </div>

<br />
          <hr className="hr-2"></hr>

          <div className='QnaNavBar'>
            <div></div>
            <div>{posts[limitPage][0]?.title}</div>
            <div>{posts[limitPage][0]?.user_id}</div>
            <div>{posts[limitPage][0]?.createdAt}</div>
          </div>
          <div className='QnaNavBar'>
            <div></div>
            <div>{posts[limitPage][1]?.title}</div>
            <div>{posts[limitPage][1]?.user_id}</div>
            <div>{posts[limitPage][1]?.createdAt}</div>
          </div>
          <div className='QnaNavBar'>
            <div></div>
            <div>{posts[limitPage][2]?.title}</div>
            <div>{posts[limitPage][2]?.user_id}</div>
            <div>{posts[limitPage][2]?.createdAt}</div>
          </div>
          <div className='QnaNavBar'>
            <div></div>
            <div>{posts[limitPage][3]?.title}</div>
            <div>{posts[limitPage][3]?.user_id}</div>
            <div>{posts[limitPage][3]?.createdAt}</div>
          </div>
          <div className='QnaNavBar'>
            <div></div>
            <div>{posts[limitPage][4]?.title}</div>
            <div>{posts[limitPage][4]?.user_id}</div>
            <div>{posts[limitPage][4]?.createdAt}</div>
          </div>
          <div className='QnaNavBar'>
            <div></div>
            <div>{posts[limitPage][5]?.title}</div>
            <div>{posts[limitPage][5]?.user_id}</div>
            <div>{posts[limitPage][5]?.createdAt}</div>
          </div>
          <div className='QnaNavBar'>
            <div></div>
            <div>{posts[limitPage][6]?.title}</div>
            <div>{posts[limitPage][6]?.user_id}</div>
            <div>{posts[limitPage][6]?.createdAt}</div>
          </div>
          <div className='QnaNavBar'>
            <div></div>
            <div>{posts[limitPage][7]?.title}</div>
            <div>{posts[limitPage][7]?.user_id}</div>
            <div>{posts[limitPage][7]?.createdAt}</div>
          </div>
          <div className='QnaNavBar'>
            <div></div>
            <div>{posts[limitPage][8]?.title}</div>
            <div>{posts[limitPage][8]?.user_id}</div>
            <div>{posts[limitPage][8]?.createdAt}</div>
          </div>
          <div className='QnaNavBar'>
            <div></div>
            <div>{posts[limitPage][9]?.title}</div>
            <div>{posts[limitPage][9]?.user_id}</div>
            <div>{posts[limitPage][9]?.createdAt}</div>
          </div>
          


<br />
<br />
<br />

          <nav>
           
            <div onClick={prev} className='previous'> {"<<"} </div>
                <div>
                  <ul className='pagination'>
                    <li className={pageNationCss} onClick={nation1}>{pageNation && pageNation[limit][0]}</li>
                    <li className={pageNationCss1} onClick={nation2}>{pageNation && pageNation[limit][1]}</li>
                    <li className={pageNationCss2} onClick={nation3}>{pageNation && pageNation[limit][2]}</li>
                    <li className={pageNationCss3} onClick={nation4}>{pageNation && pageNation[limit][3]}</li>
                    <li className={pageNationCss4} onClick={nation5}>{pageNation && pageNation[limit][4]}</li>
                  </ul>
                </div>
            <div onClick={next} className='next'> {">>"} </div>
           
          </nav>




      </div>

    </>
  )
}

export default Qna