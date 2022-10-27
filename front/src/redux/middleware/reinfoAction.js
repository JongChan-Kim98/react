import axios from 'axios';

function reidBtn(reId, userId){
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/mypage',
            data: {
                reId, userId
            }
        })
        
        alert(user.data.notice);
    }
}
function profilePicture(formData, config){
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/profil',
            data: formData,config
        }).then(()=>{
            alert("성공");

        }).catch((err)=>{
            console.log(err);
        })
        
    }
}





export const reinfoAction = {reidBtn, profilePicture};