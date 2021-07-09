
import * as actions from '../store/actions/login'
import widthStore from '../utils/widthStore'
import { connect } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
const Protect = ({ loginUser }) => {
    const router = useRouter()

    if (!loginUser) {//没有值，说明没登录。
        useEffect(() => {
            router.push('/login')
        }, [])
    }
    if (loginUser) {
        return (
            <h1>受保护的页面</h1>
        )
    }
    else {
        return null
    }

}
function mapState(state) {
    return {
        loginUser: state.loginUser
    }
}
export default connect(mapState, null)(Protect)

async function func({ store, axios }) {
    //触发仓库的whoAmI action,拿到用户信息。
    await store.dispatch(actions.whoAmI(axios))
} 

export const getServerSideProps = widthStore(func)
    
