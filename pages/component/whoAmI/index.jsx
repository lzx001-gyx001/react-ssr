import * as actions from "../../../store/actions/login"
import { useEffect } from "react"
import { connect } from 'react-redux'
const Comp = ({ whoAmI }) => {
    useEffect(() => [
        whoAmI && whoAmI()
    ], [])
    return <></>
}
function mapDispatch(dispatch) {
    return {
        whoAmI() {
            //这里不需要传递axios,客户端不需要
            dispatch(actions.whoAmI())
        }
    }
}
export default connect(null, mapDispatch)(Comp)