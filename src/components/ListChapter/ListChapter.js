/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './ListChapter.module.scss'
import { Convert } from 'src/utils/ConvertTimestampToDate'

const cx = classNames.bind(styles)

function ListChapter(item) {
    const { listChapter } = item
    return (
        <>
            {console.log(listChapter)}
            <div className={cx('chapter-info')}>
                <div className={cx('chapter-text')}>Danh sách chương</div>
                <div className={cx('list-chapter')}>
                    <div>
                        {listChapter.map((item) => (
                            <Fragment key={item._id.$oid}>
                                <div className={cx('container-chap')}>
                                    <div className={cx('chapter')}>
                                        <Link to={`/detail/comicId=${item.comicID}/chapter=${item.chap}`}>
                                            <div className={cx('text-chap')}>Chương {item.chap}</div>
                                        </Link>
                                        <div className={cx('text-date')}>{Convert(item.createAt.$numberLong)}</div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>

                    {/* <div className={cx('date')}>
                        {listChapter.map((item) => (
                            <Fragment key={item._id.$oid}>
                                <div className={cx('text-date')}>{item.createAt.$numberLong}</div>
                            </Fragment>
                        ))}
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ListChapter
