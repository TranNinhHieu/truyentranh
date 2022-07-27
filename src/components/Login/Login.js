import React, { Fragment, useRef, useState } from 'react'

import classNames from 'classnames/bind'

import styles from './Login.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
const cx = classNames.bind(styles)

function Login() {
    const [toggleVisibility, setToggleVisibility] = useState(false)
    const inputRef = useRef('password')
    const togglePassword = () => {
        setToggleVisibility(!toggleVisibility)
    }
    return (
        <Fragment>
            <Helmet>
                <title>Title</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('title')}>Đăng nhập</div>
                    <div className={cx('user')}>
                        <div className={cx('user-text')}>Tài khoản</div>
                        <input className={cx('user-input')} type="text" placeholder="Nhập tài khoản"></input>
                    </div>
                    <div className={cx('password')}>
                        <div className={cx('password-text')}>Mật khẩu</div>
                        <input
                            className={cx('password-input')}
                            type={toggleVisibility ? ' text' : 'password'}
                            placeholder="Nhập mật khẩu"
                        ></input>
                    </div>
                    <div className={cx('show-password')}>
                        <div className={cx('toggle-show')} onClick={() => togglePassword()}>
                            <FontAwesomeIcon
                                icon={faEye}
                                className={toggleVisibility ? cx('icon-eye', 'active') : cx('icon-eye')}
                            ></FontAwesomeIcon>
                        </div>
                        <label className={cx('text')}>Xem mật khẩu</label>
                    </div>
                    <Link to={`/register`} className={cx('register-text')}>
                        Chưa có tài khoản ?
                    </Link>
                    <div className={cx('button-confirm')}>Xác nhận</div>
                </div>
            </div>
        </Fragment>
    )
}
export default Login
