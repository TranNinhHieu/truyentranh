import React from 'react'
import classNames from 'classnames/bind'
import styles from './ContentComment.module.scss'

import { Convert } from '../../utils/ConvertTimestampToDate'

const cx = classNames.bind(styles)

function ContentComment({ item }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <img src={item.user.avatar} className={cx('avatar')} alt="ảnh"></img>
                <div className={cx('info-comment')}>
                    <div className={cx('info-user')}>
                        <div className={cx('info-user-name')}>{item.user.name}</div>
                        <div className={cx('date-create')}>{Convert(item.createAt)}</div>
                    </div>
                    <hr className={cx('hr-info-content')} />
                    <div className={cx('content-comment')}>{item.content}</div>
                </div>
            </div>
        </>
    )
}

export default ContentComment
