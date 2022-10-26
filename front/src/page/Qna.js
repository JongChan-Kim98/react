import React from 'react'
import { Link } from 'react-router-dom';


const Qna = () => {
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
            <div></div>
            <div></div>
            <div></div>
          </div>

<br />
<br />
<br />

          <nav>
            <ul className="pagination">
                <li><Link to = '/'>{"<<"}</Link></li>
                <li><Link to = '/'>1</Link></li>
                <li><Link to = '/'>2</Link></li>
                <li><Link to = '/'>3</Link></li>
                <li><Link to = '/'>{">>"}</Link></li>
            </ul>
          </nav>




      </div>

    </>
  )
}

export default Qna