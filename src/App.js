import Header from "./components/Header/header";
import Navbar from "./components/Navbar/nav-bar";
import Tools from "./components/Tools/Tools";
import './App.css'

function App(props) {
    return (
        <div className="container">
            <Header/>
            <Navbar/>
            <div className="container-content">
                <Tools />
            </div>
        </div>
    );
}
export default App;