import {Route, Routes} from "react-router-dom";
import Profile from "./Profile/profile";
import Dialogs from "./Dialogs/dialogs";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import News from "./News/News";
import Friends from "./Dialogs/Friends/friends";

function Tools(props) {
    return (
        <div>
            <Routes>
                <Route exact path="/profile" element={<Profile postPage={props.toolState.postPage}
                                                               dispatch={props.dispatch} />}/>
                <Route exact path="/messages" element={<Friends dialogData={props.toolState.dialogPage.friendData} />}/>
                <Route exact path={`/messages/1`} element={<Dialogs dialogData={props.toolState.dialogPage}
                                                                    dispatch={props.dispatch}/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/news" element={<News/>}/>
            </Routes>
        </div>
    )
}

export default Tools;