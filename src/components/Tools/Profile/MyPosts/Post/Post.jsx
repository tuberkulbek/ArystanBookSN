import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://pngpress.com/wp-content/uploads/2020/08/uploads_circle_circle_PNG62.png'  alt={'Paris'}/>
                {props.message}
            </div>
            <div>
                <span>likes {props.likes}</span>
            </div>
        </div>
    );
};

export default Post;