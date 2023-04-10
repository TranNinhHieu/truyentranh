import React from 'react'
import classNames from 'classnames/bind'
import styles from './Comic.module.scss'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function Comic({ item }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('comic-image')}>
                <Image src={`comics/truyen${item.number}/${item.thumbnail}`} alt={item.title} />
            </div>
            <div className={cx('comic-title')}>{item.title}</div>
        </div>
    )
}

export default Comic
