import React from 'react';
import s from './paginator.module.css'

type PaginatorPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (newPage: number) => void
}
export const Paginator = (props: PaginatorPropsType) => {
    debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let page = []
    for (let i = 1; i <= pagesCount; i++) page.push(i)
    let pagesMap = page.map(e => <span onClick={() => props.onPageChanged(e)}
                                       className={props.currentPage === e ? s.currentPage : s.page}>{e}</span>)

    return (
        <div className={s.blockPaginator}>
            <div className={s.blockSelected}></div>
            <div className={s.blockPages}>
                {pagesMap}
            </div>
        </div>
    );
};

