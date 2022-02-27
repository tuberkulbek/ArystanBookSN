import s from './Users.module.css'
import * as axios from "axios";

const User = (props) => {
    if (props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(r => props.setUsers(r.data.items))

    }
    return (<div className={s.items}>
        {
            props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small} alt={u.id}/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>
                                        FOLLOW
                                    </button>:
                                    <button onClick={() => {
                                        props.follow(u.id)
                                    }}>
                                        UNFOLLOW
                                    </button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {u.name}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {"u.location.country"}
                                </div>
                                <div>
                                    {"u.location.city"}
                                </div>
                            </span>
                        </span>
                    </div>
                )
            })
        }
    </div>);
};

export default User;