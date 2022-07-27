import React, { Fragment, useEffect, useState } from 'react'

import useQuery from '~/hooks/useQuery'
import Image from '~/components/Image'

import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function Register() {
    const [show, setShow] = useState(false)
    return (
        <Fragment>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('title')}>Đăng ký</div>
                    <div className={cx('user')}>
                        <div className={cx('user-title')}>Tài khoản</div>
                        <input type="text" placeholder="Nhập tài khoản" className={cx('user-input')}></input>
                    </div>
                    <div className={cx('password')}>
                        <div className={cx('password-title')}>Mật khẩu</div>
                        <input
                            type={show ? 'text' : 'password'}
                            placeholder="Nhập mật khẩu"
                            className={cx('password-input')}
                        ></input>
                    </div>
                    <div className={cx('password')}>
                        <div className={cx('password-title')}>Nhập lại mật khẩu</div>
                        <input
                            type={show ? 'text' : 'password'}
                            placeholder="Nhập lại mật khẩu"
                            className={cx('password-input')}
                        ></input>
                    </div>
                    <div className={cx('show-password')}>
                        <div className={cx('toggle-show')} onClick={() => setShow(!show)}>
                            <FontAwesomeIcon
                                icon={faEye}
                                className={show ? cx('icon-eye', 'active') : cx('icon-eye')}
                            ></FontAwesomeIcon>
                        </div>
                        <div className={cx('text')}>Xem mật khẩu</div>
                    </div>
                    <Link to={`/login`} className={cx('login-text')}>
                        Đã có tài khoản
                    </Link>
                    <div className={cx('button-confirm')}>Xác nhận</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
