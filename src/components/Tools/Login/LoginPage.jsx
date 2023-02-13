import { useState } from "react"
import { useDispatch } from "react-redux"
import { postLogInData } from "../../../redux/auth-reducer"
import s from "./LoginPage.module.css"

const LoginForm = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    console.log(checkbox)
    const data = {
        email: login,
        password: pass,
        rememberMe: checkbox
    }
    const handleSubmit = () => {
        dispatch(postLogInData(data))
    }
    return (
        <div className={s.login_wrapper}>
            <div className={s.login_wrapper_items}>
                <div className={s.discription}>
                    Please sign in or sign up to view this page.
                </div>
                <input
                    className={s.loginArea}
                    onChange={(e)=>setLogin(e.target.value)}
                    placeholder={'Email or phone number'}/>
                <input
                    className={s.passArea}
                    onChange={(e)=>setPass(e.target.value)}
                    placeholder={'Password'}/>
                <div className={s.checkbox}>
                    <input
                        type={"checkbox"}
                        onClick={() => setCheckbox(checkbox?false:true)}
                    />remember me
                </div>
                <button className={s.button} onClick={handleSubmit}>
                    Log in
                </button>
            </div>
        </div>
    )
}

const LoginPage = () => {
    return <LoginForm />
}
export default LoginPage