import Login from "./Login/login";
import Pass from "./Pass/pass";
import s from "./LoginPage.module.css"

const LoginPage = () => {
    return <div className={s.item}>
        <Login/>
        <Pass/>
        <button>
            save me
        </button>
        <button className={s.button7}>
            Log in
        </button>
    </div>
}

export default LoginPage