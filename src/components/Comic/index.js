import React from 'react'
import classNames from 'classnames/bind'

import styles from './Comic.module.scss'

const cx = classNames.bind(styles)

function Comic({ item }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comic-image')}>
                <img src={item.thumbnail} alt="anh" />
            </div>
            <div className={cx('comic-title')}>{item.title}</div>
        </div>
    )
}

export default Comic
