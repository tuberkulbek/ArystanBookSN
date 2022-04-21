import s from "./Login.module.css"

const Login = () => {
    return <div>
        <input
            className={s.loginArea}
            placeholder={'Email or phone number'}/>
    </div>
}

export default Login