import s from './Settings.module.css'

const Settings = () => {
    return (
        <div className={s.items}>
            <span className={s.inline}>
                <span className={s.inline}>
                    inline
                </span>
                <span className={s.inline}>
                    inline
                </span>
                <span className={s.inline}>
                    inline
                </span>
                <span className={s.inline}>
                    inline
                </span>
            </span>
        </div>
    );
};

export default Settings;