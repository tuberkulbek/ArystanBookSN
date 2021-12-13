import './App.css';
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/nav-bar";
import Tools from "./components/Tools/Tools";

function App(props) {
    return (
        <div className="container">
            <Header/>
            <Navbar addressData={props.state.addressPage.addressData}/>
            <div className="container-content">
                <Tools toolState={props.state.toolPage}
                       addPost={props.addPost}
                       updateNewPostText={props.updateNewPostText}
                       addMessage={props.addMessage}
                       updateMessageText={props.updateMessageText}/>
            </div>
        </div>
    );
}

export default App;