import React, {ChangeEvent} from "react";

export class Status extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState(
            {editMode: true}
        )
    }

    disabledEditMode = () => {
        this.setState(
            {editMode: false}
        )
        this.props.updateStatus(this.state.status)
        debugger
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {

        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
            debugger
        }
    }


    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activeEditMode}>{this.props.status || "No status"}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onChange={this.onStatusChange}
                               onBlur={this.disabledEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}
