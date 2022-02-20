<<<<<<< HEAD
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
                <Tools store={props.store}/>
            </div>
        </div>
    );
}

=======
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
                <Tools store={props.store}/>
            </div>
        </div>
    );
}

>>>>>>> 065081c7a4cdfb8df1d24491aefe819d31dce183
export default App;