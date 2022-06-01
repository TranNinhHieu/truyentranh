import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import styles from './TopViewComic.module.scss'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cx = classNames.bind(styles)
function TopViewComic({ item }) {
    return (
        <Fragment>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('comic-image')}>
                        <img src={item.thumbnail} alt="anh" />
                    </div>
                </div>
                <div className={cx('comic-title-view')}>
                    <div className={cx('comic-title')}>{item.title}</div>
                    <div className={cx('comic-view')}>
                        <FontAwesomeIcon icon={faEye} className={cx('icon-eye')} />
                        {item.views}
                    </div>
                </div>
            </div>
            <hr />
        </Fragment>
    )
}

export default TopViewComic
