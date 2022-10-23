import axios from 'axios';

function reidBtn(id){
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/mypage',
            data: {
                id
            }
        })
        console.log("reinfoAction :" + user.data)
        alert(user.data);
       
    }
}



export const reinfoAction = {reidBtn};