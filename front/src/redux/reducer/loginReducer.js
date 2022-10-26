let init = {
    id: '',
    pw: '',
    Picture : '',
    userName: '',
    isLogin : false
}

// 리듀서는 함수
function reducer(state=init, action){
    const {type, payload} = action;
    switch (type) {
        case "LOGIN":
            console.log('여기 로그인');
            return {...state, id : payload.id, pw : payload.pw, Picture : payload.user.data.userPicture, userName: payload.user.data.userName, isLogin:true};
        case "LOGOUT":
            console.log('여기 로그아웃');
            return {...state, id : '', pw : '', isLogin:false};
        default:
            return state;
    }
}

export default reducer