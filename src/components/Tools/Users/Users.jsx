import s from './Users.module.css'
import * as axios from "axios";
import React from "react";

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(r => this.props.setUsers(r.data.items))
    }

    render(){
        return (<div className={s.items}>
            {
                this.props.users.map(u => {
                    return (
                        <div>
                        <span>
                            <div>
                                <img src={u.photos.small} alt={u.id}/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {this.props.unfollow(u.id)}}>
                                        FOLLOW
                                    </button>:
                                    <button onClick={() => {this.props.follow(u.id)}}>
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
    }
}

export default Users;