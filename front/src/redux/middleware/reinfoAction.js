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

function profilePicture(){
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/profilePicture',
            data: {
                
            }
        })

        dispatch({type:"getProfilePicture",payload:{profileP}})
    }
}




export const reinfoAction = {reidBtn, profilePicture};