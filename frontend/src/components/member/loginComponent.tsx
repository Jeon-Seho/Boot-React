import {useActionState, useEffect} from "react"
import {useDispatch} from "react-redux";
import {login} from "../../slices/loginSlice.tsx";
import loginAction from "./loginAction.tsx";

interface LoginResult {
    email: string,
    signed: boolean
}

const initState: LoginResult = {
    email: '',
    signed: false
}

function LoginComponent() {
    const dispatch = useDispatch()
    const [state, action, isPending] = useActionState(loginAction, initState)
    useEffect(() => {
        if(state.signed) {
            dispatch(login(state))
        }
    },[state.signed])

    return (
        <div className = "border-2 border-sky-200 mt-10 m-2 p-4">

            {isPending && <div>로그인처리중...</div>}

            {state.signed && <div className="bg-green-300"> 로그인 처리 완료 </div>}

            <form action={action}>
                <div className="flex justify-center">
                    <div className="text-4xl m-4 p-4 font-extrabold text-blue-500">Login
                        Component
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-full p-6 text-left font-bold">Email</div>
                        <input className="w-full p-6 rounded-r border border-solid border neutral-500 shadow-md"
                               name="email" type={'text'}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <div className="w-full p-6 text-left font-bold">Password</div>
                        <input className="w-full p-6 rounded-r border border-solid border neutral-500 shadow-md"
                            name="pw" type={'password'}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="relative mb-4 flex w-full justify-center">
                        <div className="w-2/5 p-6 flex justify-center font-bold">
                            <button type='submit' className="rounded p-4 w-36 bg-blue-500 text-xl text white">
                            LOGIN
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent;
