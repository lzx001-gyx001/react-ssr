import {login} from '../store/actions/login'

import LoginForm from './component/loginForm'
import { connect } from "react-redux"

function mapDispatch(dispatch) {
    return {
        async onSubmit(formData) {
            return await dispatch(login({
                account: formData.loginId,
                password: formData.loginPwd
            }))
        }
    }
}


export default connect(null, mapDispatch)(LoginForm)
