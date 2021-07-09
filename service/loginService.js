import request from './request';
import cookie from 'cookie'
import { isBrowser } from '../utils/isBrowser';

/**
 * 
 * @param {*} param0 登录对象
 * @param {*} axios 如果传递了axios实例就使用传递的，不传递就用默认的axios实例
 * @returns 
 */
export async function login({ account, password }, axios = request) {
    //登录
    let resp = await axios.request({
        method: "POST",
        url: "/api/user/login",
        data: {
            loginId: account,
            loginPwd: password
        }
    })
    if (resp.data.code !== 0) {//登录失败,清除token
        console.log('登录失败');
    }
    return resp.data
}


export async function whoAmI(axios = request) {
    //有token
    let resp = await axios.request({
        method: "get",
        url: "/api/user/whoami",
    })
    return resp.data;
}

export function loginOut() {
    if (isBrowser()) {
        const result = cookie.serialize('token', '', {
            maxAge: 0
        })
        document.cookie = result
    }
}