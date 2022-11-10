import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {authMe} from "../../redux/auth-reduser";

export class HeaderClassContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.authMe()
    }

    render() {
        return (
            <Header profileData={this.props.profileData}/>
        )
    }


}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profileData: state.auth.profileData
    }
}
export const HeaderContainer = connect(mapStateToProps, {authMe})(HeaderClassContainer)

