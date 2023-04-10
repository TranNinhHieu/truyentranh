/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './TabBar.module.scss'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import { trimString } from '~/utils/TrimString'
import { getAccessToken } from '~/utils/Authentication'
import { connect } from 'react-redux'
import { actFetchAllTagRq, actFetchFullUserRq } from 'src/redux/actions'
import { fetchLogout } from '../../ApiCall/userAPI'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

function TabBar({ fetchAllTag, tags, fetchFullUser, user }) {
    const [searchContent, setSearchContent] = useState('')
    const [loginRegister, setLoginRegister] = useState(false)
    let navigate = useNavigate()
    const token = getAccessToken()

    useEffect(() => {
        fetchAllTag()
        if (token) fetchFullUser()
    }, [token])

    const handleGoToSearchPage = (key) => {
        if (trimString(searchContent))
            if (key === 'Enter' || key === 'click') {
                navigate(`/Search?searchContent=${searchContent}`)
                setSearchContent('')
            }
    }

    const handleLogout = async () => {
        await fetchLogout()
        await localStorage.removeItem('user_access_token')
        await toast.success('Đã đăng xuất thành công')
        await navigate('/?page=1')
    }

    return (
        <div className={cx('tab-bar')}>
            <div className={cx('top-bar')}>
                <div className={cx('top-bar-left')}>
                    <Link to="/?page=1" alt="Home">
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
                    {token ? (
                        <img className={cx('avatar')} src={user.avatar} alt="anh" />
                    ) : (
                        <img
                            className={cx('avatar')}
                            src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360"
                            alt="anh"
                        />
                    )}
                    {loginRegister && (
                        <div className={cx('login-register')}>
                            {token ? (
                                <Fragment>
                                    <Link to="UserInfo" className={cx('user-info')}>
                                        User Info
                                    </Link>
                                    <div className={cx('logout')} onClick={handleLogout}>
                                        Log Out
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Link to={`/Login`} className={cx('login')}>
                                        Login
                                    </Link>
                                    <Link to={`/Register`} className={cx('register')}>
                                        Register
                                    </Link>
                                </Fragment>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('nav-bar')}>
                <Link to="/?page=1" alt="Home">
                    <div className={cx('nav-bar-item')}>Trang chủ</div>
                </Link>
                <div className={cx('nav-bar-item', 'dropdown')}>
                    <span>Thể loại</span>
                    <div className={cx('dropdown-content')}>
                        {tags.map((item) => (
                            <Fragment key={item._id}>
                                <Link to={`/Tag?tagId=${item._id}`} alt="Home" className={cx('dropdown-item')}>
                                    <div className={cx('dropdown-item-name')}>{item.name}</div>
                                </Link>
                            </Fragment>
                        ))}
                    </div>
                </div>
                <div className={cx('nav-bar-item')}>Tìm truyện</div>
                <Link to="/History?page=1" className={cx('nav-bar-item')}>
                    Lịch sử
                </Link>
                <Link to="/LikedPage?page=1" className={cx('nav-bar-item')}>
                    Yêu Thích
                </Link>
                <Link to="/FollowedPage?page=1" className={cx('nav-bar-item')}>
                    Theo dõi
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tags: state.tags,
        user: state.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllTag: () => {
            dispatch(actFetchAllTagRq())
        },
        fetchFullUser: (token) => {
            dispatch(actFetchFullUserRq(token))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TabBar)
