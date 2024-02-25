import {ChangeEvent, useEffect, useState} from "react"

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksType) => {
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'MUST BE USER STATUS'}</span>
                </div>}
            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}/>
                </div>}
        </div>)
}

type ProfileStatusWithHooksType = {
    status: string
    updateStatus: (status: string) => void
}