import { useRouter } from "next/dist/client/router"
import { useState } from "react"
const LoginForm = ({ onSubmit }) => {

    const router = useRouter()
    const [formData, setformData] = useState({
        loginId: "",
        loginPwd: ""
    })
    return (
        <div>
            <p>
                <label htmlFor="input-C">账号：</label>
                <input name="input-C" type="text" value={formData.loginId} onChange={(e) => {
                    setformData({
                        ...formData,
                        loginId: e.target.value
                    })
                }} />

            </p>
            <p>
                <label htmlFor="input-P">密码：</label>
                <input name="input-P" type="password" value={formData.loginPwd} onChange={
                    (e) => {
                        setformData({
                            ...formData,
                            loginPwd: e.target.value
                        })
                    }
                } />
            </p>
            <p>
                <button onClick={async () => {
                    if (onSubmit) {
                        let resp = await onSubmit(formData)
                        if (resp) {
                            //登录成功
                            router.push("/")
                        } else {
                            //登录失败
                            alert("账号或密码错误")
                        }
                    }
                }} >登录</button>
            </p>
        </div>
    )
}
export default LoginForm