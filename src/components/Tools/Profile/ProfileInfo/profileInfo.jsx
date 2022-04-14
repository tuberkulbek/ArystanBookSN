import s from './profileInfo.module.css'
import Loader from "../../../../common/Loader";
import user from "../../../../user.png"

const ProfileInfo = (props) => {
    console.log(props)
    if(!props.profile){
        return <Loader/>
    }
    return (
        <div className={s.items}>
            <img
                src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                alt="elephant"
            />
            <div className={s.profilePhoto}>
                <img src={props.profile.photos.small != null ? props.profile.photos.small : user} alt={'asfvds'}/>
                <button onClick={() => {props.addPhoto(props.profile.userId)}}>+</button>
            </div>
            <div>
                {props.profile.aboutMe}
            </div>
            <div>
                {props.profile.fullName}
            </div>
        </div>
    );
};

export default ProfileInfo;