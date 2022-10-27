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

function boardStart(){
    return async(dispatch, getstate) => {
        const board = await axios({
            method : "post",
            url : "http://localhost:8000/boardStart",
            data : {

            }
        })
        // console.log(board.data);
        dispatch({type : "BOARDSTART", payload : board.data});
    }
}







export const qnawriteAction = {postQna, boardStart};