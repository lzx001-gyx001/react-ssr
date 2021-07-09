import { createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "./reducers"
import thunk from "redux-thunk"
import { isBrowser } from '../utils/isBrowser'
let store;
/**
 * 创建仓库函数
 * 该函数保证,如果是服务器端,每一次调用产生一个新的仓库
 * 如果是客户端,每次调用返回同1个仓库
 * 服务端只初始化仓库,只渲染初始化1次,后续任何操作交给浏览器，跟服务端无关
 * @param {*} initialState 初始值 该值为undefinded 使用reducer中的默认值
 */
export default function makeStore(initialState) {//调用一个函数，创建一个新的仓库，每次调用都是新仓库
    if (isBrowser()) {
        //客户端
        if (!store) {
            store = create(initialState)
        }
        return store
    }
    //客户端没有仓库,创建一个仓库返回,
    //服务器端,每次都创建一个仓库返回
    return create(initialState)
};
function create(initialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
            // 服务器什么都不做
            //浏览器加入浏览器调试工具
        )
    );
}