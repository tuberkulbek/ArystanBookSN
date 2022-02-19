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
                <Route exact path="/profile" element={<Profile/>}/>
                <Route exact path="/messages"
                       element={<Friends dialogData={props.store.getState().dialogPage.friendData}/>}/>
                <Route exact path={`/messages/1`}
                       element={<Dialogs dialogData={props.store.getState().dialogPage.friendData}/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/games" element={<Games dispatch={props.store.dispatch}
                                                     gamePage={props.store.getState().gamePage}/>}/>
                <Route path="/todo" element={<Todo/>}/>
            </Routes>
        </div>
    )
}

export default Tools;