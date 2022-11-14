import React, {ChangeEvent, useState} from 'react';

import s from './Paginator.module.css'
import {ChevronLeftIcon} from "../../commons/icons/ChevronLeftIcon";
import {ChevronRightIcon} from "../../commons/icons/ChevronRightIcon";

type PaginatorPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (newPage: number) => void
    onChangedShowUsers: (pageSize: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {
    let portionSize = 10
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onChangedShowUsers(Number(event.target.value))

    };


    return (
        <div className={s.wrapper}>
            <div className={s.pagesWrap}>
                <div className={s.chevron}
                     onClick={() => leftPortionPageNumber > 1 && setPortionNumber(portionNumber - 1)}><ChevronLeftIcon/>
                </div>
                <div className={s.pagesBlock}>
                    {pages
                        .filter((p) =>
                            p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map((p, i) =>
                            props.currentPage === p ?
                                <button className={s.active}>{p}</button> :
                                <button onClick={() => props.onPageChanged(p)} key={i}>{p}</button>
                        )}
                </div>
                <div className={s.chevron} onClick={() => setPortionNumber(portionNumber + 1)}><ChevronRightIcon/></div>
            </div>
            <div className={s.show}>
                <div>Show</div>
                <select onChange={handleChange}>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="24">24</option>
                </select>
                <div>Items per Page</div>
            </div>
        </div>
    )
}
