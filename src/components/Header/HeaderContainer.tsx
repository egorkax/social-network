import React, {ComponentType} from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {logOut} from "../../redux/auth-reduser";
import {compose} from "redux";

export class HeaderClassContainer extends React.Component<any, any> {
    render() {
        return (
            <Header profileData={this.props.profileData} logOut={this.props.logOut}/>
        )
    }


}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profileData: state.auth.profileData
    }
}
export const HeaderContainer = compose<ComponentType>(
    connect(mapStateToProps, {logOut}),
)(HeaderClassContainer)

