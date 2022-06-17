import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import styles from './TabBar.module.scss'
import { TagData } from '~/utils/TagData'

const cx = classNames.bind(styles)

function TabBar() {
    return (
        <div className={cx('tab-bar')}>
            <div className={cx('top-bar')}>
                <div className={cx('top-bar-left')}>
                    <Link to="/" alt="Home">
                        <img
                            className={cx('logo-image')}
                            src="https://firebasestorage.googleapis.com/v0/b/abca-efb7d.appspot.com/o/logovip.jpg?alt=media&token=59c9f186-5e3f-45ab-991e-fade6d9514b4"
                            alt="anh"
                        />
                    </Link>
                    <div className={cx('search')}>
                        <input className={cx('search-input')} placeholder="Bạn muốn tìm gì" />
                        <button className={cx('search-icon')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('top-bar-right')}>
                    <img
                        className={cx('avatar')}
                        src="https://pbs.twimg.com/media/FUN46S6XoAEzmlz?format=jpg&name=small"
                        alt="anh"
                    />
                </div>
            </div>
            <div className={cx('nav-bar')}>
                <Link to="/" alt="Home">
                    <div className={cx('nav-bar-item')}>Trang chủ</div>
                </Link>
                <div className={cx('nav-bar-item', 'dropdown')}>
                    <span>Thể loại</span>
                    <div className={cx('dropdown-content')}>
                        {TagData.map((item) => (
                            <Fragment key={item._id.$oid}>
                                <Link to={`/tag?tagId=${item._id.$oid}`} alt="Home" className={cx('dropdown-item')}>
                                    <div className={cx('dropdown-item-name')}>{item.name}</div>
                                </Link>
                            </Fragment>
                        ))}
                    </div>
                </div>
                <div className={cx('nav-bar-item')}>Tìm truyện</div>
                <div className={cx('nav-bar-item')}>Lịch sử</div>
                <div className={cx('nav-bar-item')}>Theo dõi</div>
            </div>
        </div>
    )
}

export default TabBar
