import s from './Settings.module.css'

const Settings = () => {
    return (
        <div className={s.items}>
            {/*<div className={s.block}>
                <div className={s.block}>
                    block
                </div>
                <div className={s.block}>
                    block
                </div>
                <div className={s.block}>
                    block
                </div>
                <div className={s.block}>
                    block
                </div>
            </div>*/}
            {/*<div className={s.inlineBlock}>
                <div className={s.inlineBlock}>
                    inline-block
                </div>
                <div className={s.inlineBlock}>
                    inline-block
                </div>
                <div className={s.inlineBlock}>
                    inline-block
                </div>
                <div className={s.inlineBlock}>
                    inline-block
                </div>
            </div>*/}
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