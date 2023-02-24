import Navbar from "./components/Navbar/nav-bar";
import Tools from "./components/Tools/Tools";
import './App.css'
import HeaderContainer from "./components/Header/HeaderContainer";
import {useDispatch, useSelector} from "react-redux";
import LoginPage from "./components/Tools/Login/LoginPage";
import { useEffect } from "react";
import { getIsAUTH } from "./app/redux/auth-reducer";

function App() {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth.isAuth)
    useEffect(() => {
        dispatch(getIsAUTH())
    }, [auth])

    if (!auth) {
        return (
            <div className="container">
                <HeaderContainer/>
                <LoginPage/>
            </div>
        )
    } 

    return (
            <div className="container">
                <HeaderContainer/>
                <Navbar/>
                <div className="container-content">
                    <Tools />
                </div>
            </div>
        );
}
export default App;