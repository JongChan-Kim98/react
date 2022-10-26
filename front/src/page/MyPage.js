import React,{useEffect, useRef, useState}from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { reinfoAction} from '../redux/middleware/reinfoAction';
import { useNavigate } from 'react-router-dom';
 

const MyPage = ({aa, user_Name}) => {
  const userName = useSelector(state => state.loginReducer.id);
  const dispatch = useDispatch();
  const reId = useRef();
  const nav = useNavigate();

  //아이디 변경 버튼
  const submitReidBtn = () =>{
    dispatch(reinfoAction.reidBtn(reId.value, userName));
    nav('/mypage');
  }

  const [imageSrc, setImageSrc] = useState(aa);
        
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <div className='myPage'>
<hr className="hr-2"></hr>
          <div className='seconHeader'>마이페이지에 오신걸 환영합니다.</div>
          <br />
<hr className="hr-2"></hr>
          <div className='leftProfil'>
            <form encType='multipart/form-data' >
              <div className='profilbox'>
                <span className="filebox">
                  {/* 저장된 프로필사진 불러오는 부분 */}
                  <div className ='profilpt'>
                  {imageSrc && <img src={imageSrc} alt="preview-img" className='profilpt' />}
                  </div>
                  {/* <img className ='profilpt' id="preview-image" src={aa} alt=''/> */}
                  {/* 사진선택부분 디스플레이논 해논 부분 */}
                  {/* <input className='displayBlock' type="file" id="input-image"  /> */}
                  {/* 파일 업로드하는 부분인데 사진변경 라벨 아이디랑 일치해서 되는 부분임 */}
                  <input type="file" accept="image/*" id="input-image" onChange={(e) => {encodeFileToBase64(e.target.files[0]);}}
 />
                  <div className="file-edit-icon">
                    <label htmlFor="input-image">사진변경</label>
                    <button className="label2" type='submit'>사진저장</button>
                  </div>
                  <br /><br />
                  <div className='username'>{userName}</div>
                </span>
              </div>
           </form>
          </div>

          <div className='rightRange'>
            <div className='reviseMypage'>
              <form>
                <div>
                  <div name='userId'></div>
                  <label htmlFor="">아이디 수정</label> <input type="text" ref={reId} onChange={(e)=>{reId.value = e.target.value}}name='reId' defaultValue={userName || ''}/> <br />  
                  <button type='submit' onClick={submitReidBtn}>아이디변경</button>
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