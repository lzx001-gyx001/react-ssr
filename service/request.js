import axios from 'axios'
import cookie from 'cookie';

//该模块导出一个instance实例。
//服务器一个实例
//客户端一个实例

let instance
if (typeof window === "undefined") {
    //服务器，普通的axios实例。只改变了baseURL
    instance = getServerSideAxios()
} else {
    //浏览器
    instance = axios.create()
}
export default instance




/**
 * 该函数根据是否传递req对象，来生成一个axios实例。
 * 有req，且req中有token，那么返回的实例中带token
 * @param {*} req 请求对象
 */
export function getServerSideAxios(req) {
    const config = {
        baseURL: `http://yuanjin.tech:5100`,
    }
    if (req) {//是否有请求对象
        //判断是否有token
        const cookies = cookie.parse(req.headers.cookie||'')
        const token = cookies.token
        if (token) {
            //有token
            config.headers = { authorization: token }
        }
    }
    //没有token,没有req.
    return axios.create(config)
}