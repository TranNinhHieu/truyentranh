import React, { useEffect, useState, useRef } from 'react'
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
                    <img
                        className={cx('logo-image')}
                        src="https://firebasestorage.googleapis.com/v0/b/abca-efb7d.appspot.com/o/logovip.jpg?alt=media&token=59c9f186-5e3f-45ab-991e-fade6d9514b4"
                    />
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
                        src="http://avatar.truyenvua.com/160x160/avatar_1649716632.jpg?r=r8645456"
                    />
                </div>
            </div>
            <div className={cx('nav-bar')}>
                <div className={cx('nav-bar-item')}>Trang chủ</div>
                <div className={cx('nav-bar-item', 'dropdown')}>
                    <span>Thể loại</span>
                    <div className={cx('dropdown-content')}>
                        {TagData.map((item) => (
                            <div className={cx('dropdown-item')}>
                                <a href="#" key={item._id.$oid}>
                                    {item.name}
                                </a>
                            </div>
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
