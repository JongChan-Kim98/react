import axios from 'axios';

function reidBtn(reId, userId){
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/reId',
            data: {
                reId, userId
            }
        })
        console.log("reinfoAction :" + user.data)
        alert(user.data);
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