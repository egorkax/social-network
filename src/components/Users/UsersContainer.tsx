import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {
    followUserTC,
    setCurrentPage,
    setFetching,
    setTotalUsersCount,
    setUsers,
    unFollowUserTC,
    UserType
} from "../../redux/users-reduser";
import React from "react";
import {usersAPI} from "../../api/api";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";


export class UsersCC extends React.Component<UsersPropsType, UserType> {

    componentDidMount() {
        this.props.setFetching(false)
        usersAPI.getUsers(this.props.currentPage, 8)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
                this.props.setFetching(true)
            })
    }

    onPageChanged = (value: number) => {
        this.props.setCurrentPage(value)
        this.props.setFetching(false)
        usersAPI.getUsers(value, 8)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
                this.props.setFetching(true)
            })
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


    }
}
//  let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         setUsers: (users) => {
//             dispatch(setUsers(users))
//         },
//         setTotalUsersCount: (value) => {
//             dispatch(setTotalUsersCount(value))
//         },
//         setCurrentPage: (newPage) => {
//             dispatch(setCurrentPage(newPage))
//         },
//         setFetching: (value) => {
//             dispatch(setFetching(value))
//         },
//         followUser: (userId) => {
//             dispatch(followUser(userId))
//         },
//         unFollowUser: (userId) => {
//             dispatch(unFollowUser(userId))
//         },
//
//     }
// }


export const UsersContainer = connect(mapStateToProps, {
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setFetching,
    followUserTC,
    unFollowUserTC
})(UsersCC)

//type
type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
}
type mapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void
    setTotalUsersCount: (value: number) => void
    setCurrentPage: (newPage: number) => void
    setFetching: (value: boolean) => void
    followUserTC: (userId: number) => void
    unFollowUserTC: (userId: number) => void
}
export type UsersPropsType = mapDispatchToPropsType & mapStateToPropsType