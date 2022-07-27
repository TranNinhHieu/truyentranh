import { Link } from 'react-router-dom'
import React from 'react'
import classNames from 'classnames/bind'

import styles from './Comic.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function Comic({ item }) {
    return (
        //Khi m click vào cái Link này ==> tuyền qua param . t nho pẩm là nó lấy từ sau khúc html:// mà :v la

        <Link to={`/detail?comicId=${item._id}`}>
            <div className={cx('wrapper')}>
                <div className={cx('comic-image')}>
                    <Image src={`comics/truyen${item.number}/${item.thumbnail}`} alt={item.title} />
                </div>
                <div className={cx('comic-title')}>{item.title}</div>
            </div>
        </Link>
    )
}

export default Comic
