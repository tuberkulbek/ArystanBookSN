import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/profile";
import Dialogs from "./Dialogs/dialogs";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import News from "./News/News";
import Friends from "./Dialogs/Friends/friends";
import Games from "./Games/Games";
import Todo from "./TODO/Todo";

function Tools(props) {
    return (
        <div>
            <Routes>
                <Route exact path="/profile" element={<Profile postPage={props.state.postPage}
                                                               dispatch={props.dispatch}/>}/>
                <Route exact path="/messages" element={<Friends dialogData={props.state.dialogPage.friendData}/>}/>
                <Route exact path={`/messages/1`} element={<Dialogs dialogData={props.state.dialogPage}
                                                                    dispatch={props.dispatch}/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/games" element={<Games dispatch={props.dispatch} gamePage={props.state.gamePage}/>}/>
                <Route path="/todo" element={<Todo dispatch={props.dispatch}/>}/>
            </Routes>
        </div>
    )
}

export default Tools;