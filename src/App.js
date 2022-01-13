import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/nav-bar";
import Tools from "./components/Tools/Tools";

function App(props) {
    return (
        <div className="container">
            <Header/>
            <Navbar/>
            <div className="container-content">
                <Tools state={props.state}
                       dispatch={props.dispatch}/>
            </div>
        </div>
    );
}

export default App;