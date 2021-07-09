import makeStore from '../store/index'
import { getServerSideAxios } from '../service/request'


//封装getServerSideProps函数，给其中的参数对象添加属性
export default function (func) {
    return async function (props) {
        const store = makeStore()
        //给props中注入 store对象，axios对象（该实例可能携带cookie）
        props.store = store;
        const req = props.req || {}
        const axios = getServerSideAxios(req)
        props.axios = axios

        let result = await func(props);
        console.log(result);
        result = result ? result : {};
        return {
            props: {
                ...result,
                _initialState: store.getState()
            }
        }
    }
}