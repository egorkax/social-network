import React from "react";

export class Status extends React.Component<any, any> {
    state = {
        editMode: false
    }

    activeEditMode() {
        this.setState(
            {editMode: true}
        )
    }

    disabledEditMode() {
        this.setState(
            {editMode: false}
        )
    }


    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activeEditMode.bind(this)}>Status</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.disabledEditMode.bind(this)} type={"text"} value={'status'}/>
                    </div>
                }
            </>
        )
    }
}
