import React from 'react'
import classNames from 'classnames/bind'
import styles from './Loading.module.scss'

const cx = classNames.bind(styles)
export default function Loading() {
    return (
        <div>
            <span classname={cx('loader')}></span>
        </div>
    )
}
