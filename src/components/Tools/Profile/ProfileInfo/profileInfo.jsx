import s from './profileInfo.module.css'
import Loader from "../../../../common/Loader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Loader/>
    }
    return (
        <div className={s.items}>
            <img
                src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                alt="elephant"
            />
            <div>
                <img src={props.profile.photos.small}/>
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