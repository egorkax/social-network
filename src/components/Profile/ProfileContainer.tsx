import React, {Component, ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
    getUserProfile,
    getUserStatus,
    setUserProfile,
    updatePhotoProfile,
    updateStatusTC
} from "../../redux/profile-reduser";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {compose} from "redux";

class ProfileClassContainer extends React.Component<any, any> {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.myId
        }
        if (userId !== undefined) {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        } else this.props.setUserProfile(null)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (this.props.router.params.userId !== prevProps.router.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     isOwner={!this.props.router.params.userId}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusTC}
                     updatePhotoProfile={this.props.updatePhotoProfile}/>
        )
    }
}

export function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        myId: state.auth.profileData?.id,
        isAuth: state.auth.isAuth

    }
}

export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getUserStatus, updateStatusTC, updatePhotoProfile}),
    withRouter
)(ProfileClassContainer)