import { actionTypes } from '../actions/login'

const reducerLogin = function (state = null, { type, payload }) {
    switch (type) {
        case actionTypes.setLoginUser:
            return payload;
        default:
            return state
    }
}
export default reducerLogin