import axios from 'axios';

function postQna(title, content, id){
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/writerQna',
            data: {
                title, content, id
            }
        })
         console.log("qnaAction :" + user.data)
      
        alert(user.data);
       
    }
}


export const qnawriteAction = {postQna};