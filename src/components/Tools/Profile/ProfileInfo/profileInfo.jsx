import s from './profileInfo.module.css'
import Loader from "../../../../common/Loader";
import user from "../../../../assets/user.png"
import StatusInfo from "./StatusInfo";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loader/>
    }
    return (
        <div className={s.items}>
            <div className={s.profilePhoto}>
                <img src={props.profile.photos.small != null ? props.profile.photos.small : user} alt={'asfvds'}/>
                <button onClick={() => {props.addPhoto(props.profile.userId)}}>+</button>
            </div>
            <StatusInfo updateStatus={props.updateStatus}
                        status={!props.status ? 'your status' : props.status}/>
            <div>
                {props.profile.fullName}
            </div>
        </div>
    );
};

export default ProfileInfo;