import React, {useState} from "react";
import style from './Paginator.module.css'

export const Paginator: React.FC<PaginatorType> = ({
                                                       totalCount,
                                                       pageSize,
                                                       currentPage = 1,
                                                       onPageChanged,
                                                       portionSize = 10
                                                   }) => {
    let pagesCount = Math.ceil(totalCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={style.paginator}>
            {
                portionNumber > 1 && <button className={style.buttonBackStyle}
                                             onClick={() => setPortionNumber(portionNumber - 1)}>BACK</button>
            }

            {pages.filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber).map(el => {
                    return <span className={currentPage === el ? style.selectedPage : '' + ' ' + style.pageNumber}
                                 onClick={() => {
                                     onPageChanged(el)
                                 }}>
                            {el}
                        </span>
                }
            )}

            {portionNumber < portionCount && <button className={style.buttonRightStyle}
                                                     onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
        </div>
    )
}
/*
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
 */
type PaginatorType = {
    totalCount: number
    pageSize: number
    currentPage?: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}
