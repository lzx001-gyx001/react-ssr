import * as loginService from '../../service/loginService'

export const actionTypes = {
    setLoginUser: "login/setLoginUser",
    login: "login/login",
    whoAmI: "login/whoAmI",
    loginOut: "login/loginOut",
}

export function setLoginUser(user) {
    return { type: actionTypes.setLoginUser, payload: user }
}

export function login({ account, password }) {
    return async function (dispatch) {
        const resp = await loginService.login({ account, password })
        if (resp.data) {
            //登录成功
            dispatch(setLoginUser(resp.data))
            return true
        } else {
            //登录失败
            dispatch(setLoginUser(null))
            return false
        }
    }
}

export function whoAmI(axios) {
    return async function (dispatch) {
        const resp = await loginService.whoAmI(axios)
        if (resp.data) {
            //登录成功
            dispatch(setLoginUser(resp.data))
            return true
        } else {
            //登录失败
            dispatch(setLoginUser(null))
            return false
        }
    }
}

export function loginOut() {
    return function (dispatch) {
        //清仓库
        dispatch(setLoginUser(null))
        //清cookie
        loginService.loginOut()
    }
}