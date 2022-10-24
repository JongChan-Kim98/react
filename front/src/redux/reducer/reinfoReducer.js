let init = {
    picture:''
}

function reducer(state=init, action){
    const {type, payload} = action;
    switch (type) {
        case "getProfilePicture":
            return {...state, picture:payload.id};
        default:
            return state;
    }
}

export default reducer