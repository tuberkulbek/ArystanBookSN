import s from './profileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.items}>
            <img
                src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
                alt="elephant"
            />
            <div>ava + description</div>
        </div>
    );
};

export default ProfileInfo;