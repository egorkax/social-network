import React from "react";
import {Profile} from "./Profile";
import {usersAPI} from "../../api/api";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reduser";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

export class ProfileClassContainer extends React.Component<any, any> {
    componentDidMount() {

        let userId = this.props.router.params.userId;
        if (userId !== undefined) {
            usersAPI.getUserProfile(userId)
                .then((res) => {
                    this.props.setUserProfile(res.data)
                })
        } else this.props.setUserProfile(null)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

function withRouter(Component: any) {
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

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withRouter(ProfileClassContainer))