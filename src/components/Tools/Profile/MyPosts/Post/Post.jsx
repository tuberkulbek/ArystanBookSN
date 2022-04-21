import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item} id={props.id}>
                <img src='https://pngpress.com/wp-content/uploads/2020/08/uploads_circle_circle_PNG62.png'
                     alt={'Paris'}/>
                {props.message}
            </div>
            <div className={s.likes}>
                <div className={s.like}>likes</div>
                <div className={s.btns}>
                    <button className={s.btn}
                            onClick={()=>props.isLiked ? props.dislike(props.id) : props.like(props.id)}>
                        <img src="https://cdn.pixabay.com/photo/2017/09/23/16/33/pixel-heart-2779422_1280.png"
                             alt="Snow"/>
                    </button>
                </div>
                <div className={s.count}>{props.likes}</div>
            </div>
        </div>
    );
};

export default Post;