import { Link, useNavigate } from 'react-router-dom'
import React, { Fragment, useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import styles from './TabBar.module.scss'
import { TagData } from '~/utils/TagData'
import { trimString } from '~/utils/TrimString'

const cx = classNames.bind(styles)

function TabBar() {
    const [searchContent, setSearchContent] = useState('')
    const [loginRegister, setLoginRegister] = useState(false)
    let navigate = useNavigate()

    const handleGoToSearchPage = (key) => {
        if (trimString(searchContent))
            if (key === 'Enter' || key === 'click') {
                navigate(`/search?searchContent=${searchContent}`)
                setSearchContent('')
            }
    }
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
                        <input
                            className={cx('search-input')}
                            placeholder="Bạn muốn tìm gì"
                            onChange={(e) => setSearchContent(e.target.value)}
                            value={searchContent}
                            onKeyDown={(event) => handleGoToSearchPage(event.key)}
                        />

                        <button onClick={() => handleGoToSearchPage('click')} className={cx('search-icon')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className={cx('top-bar-right')} onClick={() => setLoginRegister(!loginRegister)}>
                    <img
                        className={cx('avatar')}
                        src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
                        alt="anh"
                    />
                    {console.log(loginRegister)}
                    {loginRegister && (
                        <div className={cx('login-register')}>
                            <Link to={`/login`} className={cx('login')}>
                                Login
                            </Link>

                            <Link to={`/register`} className={cx('register')}>
                                Register
                            </Link>
                        </div>
                    )}
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
