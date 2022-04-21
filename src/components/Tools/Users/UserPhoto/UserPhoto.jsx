
import React from "react";
import Loader from "../../../../common/Loader";
import {NavLink} from "react-router-dom";
import user from "../../../../user.png";

const UserPhoto = (props) => {
    return(
        <div>
            {props.isFetching
                ? <Loader />
                : <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos.small != null ? props.photos.small : user} alt={props.id}/>
                </NavLink>}
        </div>
    )
}

export default UserPhoto;