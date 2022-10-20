import axios from 'axios';

function login(id,pw){
    
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/log',
            data: {
                id,pw
            }
        })

        console.log(user);

        if(user.data){
            dispatch({type:"LOGIN",payload:{id,pw}})
            alert(user.data);
        } else{
            alert('없는 아이디임 회원가입하세요');
        }
    }
}


function logOut(){
    return (dispatch, getState) => {
        if(getState().loginReducer.isLogin){
            dispatch({type:"LOGOUT"})
        }
    }
}

function signUp(id,pw,name){
    return async(dispatch, getState) =>
    {
        const user =  await axios({
            method: 'post',
            url:'http://localhost:8000/registerPage',
            data: {
                id,pw,name
            }
        })
        console.log('회원가입내용'+ user);
        alert(user.data);
       
    }
}

export const loginAction = {login,signUp,logOut};