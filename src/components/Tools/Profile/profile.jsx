import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/profileInfo";


const Profile = (props) => {
    return (
        <div className={s.items}>
            <img
                src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                alt="elephant"
            />
            <ProfileInfo />
            <MyPosts postData={props.postPage.postData}
                     newPostText={props.postPage.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;