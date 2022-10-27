import { combineReducers } from "redux";
import loginReducer from './loginReducer';
import qnaborderReducer from './qnaborderReducer'

// 합칠 '리듀서'들을 객체로 합쳐서 보냄 그리고 rootReducer를 내보냄
const rootReducer = combineReducers({loginReducer, qnaborderReducer});

export default rootReducer;