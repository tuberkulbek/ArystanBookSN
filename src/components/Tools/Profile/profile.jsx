import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    console.log(props)
    return (
        <div className={s.items}>
            <ProfileInfo profile={props.props}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;