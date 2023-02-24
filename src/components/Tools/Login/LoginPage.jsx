import { useState } from "react"
import { useDispatch } from "react-redux"
import { postLogInData } from "../../../app/redux/auth-reducer"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import s from "./LoginPage.module.css"

const LoginForm = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const data = {
        email: login,
        password: pass,
        rememberMe: checkbox
    }
    const handleShowPassword = () => {
        setIsVisible(!isVisible)
    }
    const handleSubmit = (e) => {
        if (e.type === "click" || e.key === "Enter") {
            dispatch(postLogInData(data))
        }
    }
    return (
        <div className={s.login_wrapper}>
            <div className={s.login_wrapper_items}>
                <div className={s.discription}>
                    Please sign in or sign up to view this page.
                </div>
                <input
                    className={s.loginArea}
                    onChange={(e) => setLogin(e.target.value)}
                    onKeyPress={handleSubmit}
                    type={"email"}
                    placeholder={'Email or phone number'} />
                <div className={s.password_wrapper}>
                    <input
                        className={s.passArea}
                        onChange={(e) => setPass(e.target.value)}
                        onKeyPress={handleSubmit}
                        type={ !isVisible ? "password" : "text" }
                        placeholder={'Password'} />
                    
                    {isVisible ? <AiOutlineEye onClick={handleShowPassword} /> :
                        <AiOutlineEyeInvisible onClick={handleShowPassword} />}
                </div>
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