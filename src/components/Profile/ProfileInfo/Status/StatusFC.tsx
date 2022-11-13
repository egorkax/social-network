import React, {ChangeEvent, useEffect, useState} from "react";

export const Status = (props: any) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const onBlurHandler = () => {
        props.updateStatus(status)
        setEditMode(false)

    }

    return (
        <>
            {!editMode
                ? <div>
                    <span onDoubleClick={() => setEditMode(true)}>{props.status || "No status"}</span>
                </div>
                : <div>
                    <input autoFocus={true} onChange={onChangeStatus}
                           onBlur={onBlurHandler}
                           value={status}/>
                </div>
            }
        </>
    )
}

