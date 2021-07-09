
import Link from "next/link"
import style from './index.module.css'
import React from 'react'
import { connect } from 'react-redux'
import { loginOut } from "../../../store/actions/login"
import { useRouter } from "next/dist/client/router"

const myHeader = ({ loginUser, loginOut }) => {
    const router = useRouter()
    return (
        <ul className={style.header} >

            <li>
                <Link href="/"><a>首页</a></Link>
            </li>
            <li>
                <Link href="/movies"><a>电影页</a></Link>
            </li>
            <li>
                <Link href="/redux"><a>Redux测试</a></Link>
            </li>
            <li>
                <Link href="/protect"><a>受保护的页面</a></Link>
            </li>
            {
                loginUser ?
                    <li>
                        <span>{loginUser.name}</span>
                        <button onClick={() => {
                            loginOut && loginOut()
                            router.push("/login")
                        }}>注销</button>
                    </li>

                    : <li>
                        <Link href="/login"><a>登录</a></Link>
                    </li>
            }
        </ul >
    )
}

function mapState(state) {
    return {
        loginUser: state.loginUser
    }
}
function mapDispatch(dispatch) {
    return {
        loginOut() {
            dispatch(loginOut())
        }
    }
}
export default connect(mapState, mapDispatch)(myHeader)
