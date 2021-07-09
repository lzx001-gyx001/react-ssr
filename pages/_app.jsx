//模板
import "./global.css"
import Header from "./component/Header"
import { Provider } from "react-redux"
import makeStore from '../store'
import WhoAmI from "./component/whoAmI"

const app = ({ Component, pageProps }) => {
    const { _initialState, ...rest } = pageProps
    return (
        <Provider store={makeStore(_initialState)}>

            <div>
                <WhoAmI />
                <Header />
                {/* 匹配到的页面 */}
                <div className="view">
                    <Component {...rest} />
                </div>
            </div>
        </Provider >
    )
}

export default app
