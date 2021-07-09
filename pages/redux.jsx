
import { connect } from "react-redux"
import makeStore from "../store"
import * as actions from "../store/actions/counter"
import widthStore from '../utils/widthStore.js'

function Page({ number, increase, decrease, asyncIncrease, asyncDecrease }) {
    return <div>
        <h1>{number}</h1>
        <p>
            <button onClick={asyncDecrease}>异步减</button>
            <button onClick={decrease}>减</button>
            <button onClick={increase}>加</button>
            <button onClick={asyncIncrease}>异步加</button>
        </p>
    </div>
}
function mapState(state) {
    return {
        number: state.counter
    }
}

function mapDispatch(dispatch) {
    return {
        increase() {
            dispatch(actions.increase())
        },
        decrease() {
            dispatch(actions.decrease())
        },
        asyncIncrease() {
            dispatch(actions.asyncIncrease())
        },
        asyncDecrease() {
            dispatch(actions.asyncDecrease())
        }
    }
}

export default connect(mapState, mapDispatch)(Page)

const func = async ({ store }) => {
    await store.dispatch(actions.asyncIncrease())
}
export const getServerSideProps = widthStore(func)
//初始化仓库
// export async function getServerSideProps() {
//     console.log("redux页面打印");
//     //创建一个使用默认值的仓库
//     const store = makeStore();
//     //触发异步减少函数  测试
//     await store.dispatch(actions.asyncIncrease())
//     //仓库有数据了
//     return {
//         props: {
//             _initialState: store.getState()
//         }
//     }
// }