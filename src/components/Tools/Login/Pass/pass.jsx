import s from "./Pass.module.css"

const Pass = () => {
    return <div>
        <textarea
            className={s.passArea}
            placeholder={'Password'}/>
    </div>
}

export default Pass