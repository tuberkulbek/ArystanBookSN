import Navbar from "./components/Navbar/nav-bar";
import Tools from "./components/Tools/Tools";
import './App.css'
import HeaderContainer from "./components/Header/HeaderContainer";

function App () {
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