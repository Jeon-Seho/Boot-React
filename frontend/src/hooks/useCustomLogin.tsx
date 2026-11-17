import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { loginPostAsync, logout } from "../slices/loginSlice"
import { Navigate, useNavigate } from "react-router"

const useCustomLogin = () => {
    const dispatch = useDispatch<AppDispatch>()
    const loginState = useSelector((state: RootState) => state.loginSlice)
    const loginStatus = loginState.status
    const navigate = useNavigate()

    const doLogin = async (email:string, pw:string) => {
        dispatch(loginPostAsync({email, pw}))
    }

    const doLogout = () => {
        dispatch(logout(null))
    }

    const moveToLogin = () => {
        navigate("/member/login")
    }

    const moveToLoginReturn= () =>{ //--------로그인페이지로이동컴포넌트
        return <Navigate replace to="/member/login"/>
    }

    const moveToPath= (path:string) => { //----------------페이지이동
        navigate({pathname: path}, {replace:true})
    }

    return{loginState, loginStatus, doLogin, doLogout, moveToLogin, moveToLoginReturn, moveToPath}
}

export default useCustomLogin;
