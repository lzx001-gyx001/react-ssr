//设置、获取、清除 token
import { isBrowser } from './isBrowser'

/**
 * 设置token
 * @param {*} token 
 */
export function setToken(token) {
    if (isBrowser()) {
        //浏览器环境
        localStorage.setItem("token", token)
        return true
    }
    return false
}

/**
 * 获取token
 * @returns 不是浏览器环境返回false
 */
export function getToken() {
    if (isBrowser()) {
        return localStorage.getItem("token")
    }
    return false
}

/**
 * 删除token
 * @returns 
 */
export function removeToken() {
    if (isBrowser()) {
        localStorage.removeItem("token")
        return true
    }
    return false
}
