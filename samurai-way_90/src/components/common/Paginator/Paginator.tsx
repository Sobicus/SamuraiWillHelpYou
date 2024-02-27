import React from "react";
import style from './Paginator.module.css'


export const Paginator = (props: PaginatorType) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p ? style.selectedPage : ''}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}>{p}</span>
            })}
        </div>
    )
}
type PaginatorType = {
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}