import React from 'react'
import {img1, img2} from '../img';

const Body = () => {
    
  return (
    <>
    <div className='body'>
      <div className='textHead'>
        <h1><span>I'm still</span></h1>
        <h1><span>Hungry</span></h1>
        <img src = {img1}  alt=''></img>
        <div className='category'> 
            <table>
              <tbody>
              <tr>
                <td>#human</td>
                <td>#nodeJs</td>
                <td>#traveler</td>  
              </tr>
              <tr>
                <td>#brother</td>
                <td>#html/css/Js</td>
                <td>#foodie</td>
              </tr>
              <tr>
                <td>#proudcitizen</td>
                <td>#react</td>
                <td>#sports</td>
              </tr>
              <tr>
                <td>#student</td>
                <td>#blockChain</td>
                <td>#game</td>
              </tr>
              </tbody>
            </table>
        </div>
      </div>
      
    </div>

        <div className='seconDiv'>
          <div className='picture'>
              <img src = {img2} alt=''></img>
          </div>
            <div className='introduce'>
              <h1>Let's Chat!</h1>
              <br/>
              <p>안녕하세요. 여러분 만나서 반갑습니다.</p>
              <p>안녕히 계세요 ~. 그럼 이만</p>
            </div>
        </div>

      </>
  )
}

export default Body