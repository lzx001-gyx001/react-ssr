import { createProxyMiddleware } from "http-proxy-middleware"

const cookieName = "token"
const MaxAge = 24 * 60 * 60
export default createProxyMiddleware({
    target: "http://yuanjin.tech:5100",
    changeOrigin: true,
    onProxyRes,
    onProxyReq
})

//响应拦截:把响应的headers中的authorization放到cookie中，然后删除headers中的authorization
function onProxyRes(proxyRes, req, res) {
    let token = proxyRes.headers["authorization"]
    if (token) {
        proxyRes.headers['set-cookie'] = `${cookieName}=${token};Max-Age=${MaxAge};path=/`
        delete proxyRes.headers['authorization']; // remove header from response
    }
}
//请求拦截：把请求中的cookie放到header的authorization中。
function onProxyReq(proxyReq, req, res) {
    let token = req.cookies[cookieName];
    if (token) {
        proxyReq.setHeader('authorization', token);
    }
}


export const config = {
    api: {
        bodyParser: false//关闭bodyParser
    }
}