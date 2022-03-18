import {Route, Routes} from "react-router-dom";
import Dialogs from "./Dialogs/dialogs";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import News from "./News/News";
import UsersContainer from "./Users/UsersContainer";
import FriendsContainer from "./Dialogs/Friends/FriendsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import GamesContainer from "./Games/GamesContainer";
import TODOContainer from "./TODO/TODOContainer";

function Tools(props) {
    return (
        <div>
            <Routes>
                <Route path="/profile/*" element={<ProfileContainer />}/>
                <Route exact path="/messages"
                       element={<FriendsContainer/>}/>
                <Route exact path={`/messages/1`}
                       element={<Dialogs/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/games" element={<GamesContainer />}/>
                <Route path="/todo" element={<TODOContainer />}/>
                <Route path="/users" element={<UsersContainer/>}/>
            </Routes>
        </div>
    )
}

export default Tools;