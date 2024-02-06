import style from '../Dialogs.module.css'

export const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}
type MessagePropsType = {
    id: number
    message: string
}