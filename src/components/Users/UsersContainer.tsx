import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {followUserTC, getUsers, unFollowUserTC, UserType} from "../../redux/users-reduser";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


export class UsersCC extends React.Component<UsersPropsType, UserType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (value: number) => {
        this.props.getUsers(value, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Users users={this.props.users}
                                                followUser={this.props.followUserTC}
                                                unFollowUser={this.props.unFollowUserTC}
                                                totalUsersCount={this.props.totalUsersCount}
                                                currentPage={this.props.currentPage}
                                                pageSize={this.props.pageSize}
                                                onPageChanged={this.onPageChanged}
                                                isFollowing={this.props.isFollowing}

                    />
                    : <Preloader/>}

            </>


        );
    }
}


let mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing


    }
}

export const UsersContainer = connect(mapStateToProps, {
    followUserTC,
    unFollowUserTC,
    getUsers,
})(UsersCC)

//type
type    mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    isFollowing: Array<number>
}
type    mapDispatchToPropsType = {

    followUserTC: (userId: number) => void
    unFollowUserTC: (userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = mapDispatchToPropsType & mapStateToPropsType