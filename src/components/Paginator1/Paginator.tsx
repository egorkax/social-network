import React, {ChangeEvent, useState} from 'react';
import s from './paginator.module.css'

type PaginatorPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    onPageChanged: (newPage: number) => void
    onChangedShowUsers: (pageSize: number) => void
}
 const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) pages.push(i)
    // let pagesMap = page.map(e => <span onClick={() => props.onPageChanged(e)}
    //                                    className={props.currentPage === e ? s.currentPage : s.page}>{e}</span>)

    let portionSize = 10
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        props.onChangedShowUsers(Number(event.target.value))
    };

    return (
        <div className={s.blockPaginator}>
            <div className={s.show}>
                <div>Show</div>
                <select onChange={handleChange}>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="24">24</option>
                </select>
                <div>Items per Page</div>
            </div>
            <div className={s.pagesWrap}>
                <div className={s.chevron}
                     onClick={() => leftPortionPageNumber > 1 && setPortionNumber(portionNumber - 1)}>
                    `{'<'}`
                </div>
                <div className={s.pagesBlock}>
                    {pages
                        .filter((e) =>
                            e >= leftPortionPageNumber && e <= rightPortionPageNumber)
                        .map((e, i) =>
                            props.currentPage === e ?
                                <button className={s.active}>{e}</button> :
                                <button onClick={() => props.onPageChanged(e)} key={i}>{e}</button>
                        )}
                </div>
                <div className={s.chevron} onClick={() => setPortionNumber(portionNumber + 1)}> `{'>'}`</div>
            </div>
        </div>
    );
};

