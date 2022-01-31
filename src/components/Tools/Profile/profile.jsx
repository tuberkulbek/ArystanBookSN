import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={s.items}>
            <img
                src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                alt="elephant"
            />
            <ProfileInfo />
            <MyPostsContainer postData={props.postPage.postData}
                     newPostText={props.postPage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;