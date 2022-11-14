import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {followUserTC, getUsers, unFollowUserTC, UserType} from "../../../redux/users-reduser";
import React from "react";
import {Preloader} from "../../Preloader/Preloader";
import {Users1} from "./Users1";


export class UsersCC extends React.Component<UsersPropsType, UserType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (value: number) => {
        this.props.getUsers(value, this.props.pageSize)
    }
    onChangedShowUsers = (pageSize: number) => {
        this.props.getUsers(this.props.currentPage, pageSize)
        debugger

    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Users1 users={this.props.users}
                                                followUser={this.props.followUserTC}
                                                unFollowUser={this.props.unFollowUserTC}
                                                totalUsersCount={this.props.totalUsersCount}
                                                currentPage={this.props.currentPage}
                                                pageSize={this.props.pageSize}
                                                onPageChanged={this.onPageChanged}
                                                isFollowing={this.props.isFollowing}
                                                onChangedShowUsers={this.onChangedShowUsers}

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