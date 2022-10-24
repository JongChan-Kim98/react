import React,{useEffect, useRef}from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { reinfoAction} from '../redux/middleware/reinfoAction';
import { useNavigate } from 'react-router-dom';
 

const MyPage = () => {
  const userName = useSelector(state => state.loginReducer.id);
  const dispatch = useDispatch();
  const reId = useRef();
  const nav = useNavigate();

  const submitReidBtn = () =>{
    dispatch(reinfoAction.reidBtn(reId.value, userName));
    nav('/mypage');
  }

  let previewImage = document.getElementById("preview-image");
  let count = false;
  previewImage = "https://static.nid.naver.com/images/web/user/default.png?type=s160";
  
  function readImage(input) {
  // 인풋 태그에 파일이 있는 경우
  if(input.files && input.files[0] && count === false) {
      count = true;
      // FileReader 인스턴스 생성
      const reader = new FileReader()
      // 이미지가 로드가 된 경우
      reader.onload = (e) => {
          previewImage.src = e.target.result
      }
      // reader가 이미지 읽도록 하기
      reader.readAsDataURL(input.files[0])
      } 
  }

  window.onload = function(){
    // input file에 change 이벤트 부여
    const inputImage = document.getElementById("input-image")
    inputImage.addEventListener("change", e => {
        readImage(e.target)
    })
    const previewde = document.querySelector(".preview-de");
    previewde.addEventListener("click",function(){
        if(count === true){
            previewImage.src = "https://static.nid.naver.com/images/web/user/default.png?type=s160";
            count = false;
        }
    })
  }

  return (
    <>
      <div className='myPage'>
<hr className="hr-2"></hr>
          <div className='seconHeader'>마이페이지에 오신걸 환영합니다.</div>
          <br />
<hr className="hr-2"></hr>
          <div className='leftProfil'>
            <form action="/profilePicture" method='POST'>
              <div className='profilbox'>
                <span className="filebox">
                  <img className ='profilpt' id="preview-image" src={previewImage} alt=''/>
                  <input className='displayBlock' type="file" id="input-image"  />
                  <input type="file" accept="image/*" id="input-image" name="profilePicture" defaultValue="" />
                  <div className="file-edit-icon">
                    <label htmlFor="input-image">사진변경</label>
                    <label className="preview-de">삭제</label> 
                  </div>
                  <br /><br />
                  <div className='username'>{userName}</div>
                </span>
              </div>
           </form>
          </div>

          <div className='rightRange'>
            <div className='reviseMypage'>
              <form action="/reId" method='POST'>
                <div>
                  <div name='userId'></div>
                  <label htmlFor="">아이디 수정</label> <input type="text" ref={reId} onChange={(e)=>{reId.value = e.target.value}}name='reId' defaultValue={userName || ''}/> <br />  
                  <button type='submit'  onClick={submitReidBtn}>아이디변경</button>
                </div>
              </form>
                  <label htmlFor="">비밀번호 수정</label> <input type="text" /><br /> 
                  <button type='submit'  onClick={submitReidBtn}>비밀번호수정</button><br />
  <br />
                <div>
                  <label htmlFor="">자기소개 #태그 {'(최대12개)'}</label><br />
                  <input type="text" /><input type="text" /><input type="text" /><br />
                  <input type="text" /><input type="text" /><input type="text" /><br />
                  <input type="text" /><input type="text" /><input type="text" /><br />
                  <input type="text" /><input type="text" /><input type="text" /><br />
                </div>
  <br />
                <label htmlFor="">메인페이지 한줄소개{'15자이내'} </label><input type="text" /><br /><br />

                <button type='submit'>적 용</button>
<br /><br /><br />
 
                <div>
                  <label htmlFor="">Let's Chat </label><br />
                  <textarea name="" id="" cols="50" rows="10"></textarea>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default MyPage