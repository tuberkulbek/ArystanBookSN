import Login from "./Login/login";
import Pass from "./Pass/pass";
import s from "./LoginPage.module.css"

const LoginForm = () => {
    return <form>
        <Login/>
        <Pass/>
        <input type={"checkbox"}/>remember me
        <button className={s.button7}>
            Log in
        </button>
    </form>
}
const LoginPage = () => {
    return <div className={s.item}>
        <LoginForm/>
    </div>
}
export default LoginPage