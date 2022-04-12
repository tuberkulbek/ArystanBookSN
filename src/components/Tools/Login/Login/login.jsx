import s from "./Login.module.css"

const Login = () => {
    return <div>
        <textarea
            className={s.loginArea}
            placeholder={'Email or phone number'}/>
    </div>
}

export default Login