import React from 'react';
import {authAPI} from "../../api/api";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {setProfileData} from "../../redux/auth-reduser";

export class HeaderClassContainer extends React.Component<any, any> {
    componentDidMount() {
        debugger
        authAPI.authMe()

            .then((res) => {
                if (res.data.resultCode === 0) {
                    let data = res.data.data
                    debugger
                    this.props.setProfileData(data)
                }
            })
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
export const HeaderContainer = connect(mapStateToProps, {setProfileData})(HeaderClassContainer)

