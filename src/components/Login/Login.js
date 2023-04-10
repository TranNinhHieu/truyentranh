/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { fetchLogin } from '../../ApiCall/userAPI'
import { getAccessToken } from 'src/utils/Authentication'

const cx = classNames.bind(styles)

function Login() {
    const token = getAccessToken()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [toggleVisibility, setToggleVisibility] = useState(false)
    const navigate = useNavigate()

    const togglePassword = () => {
        setToggleVisibility(!toggleVisibility)
    }

    useEffect(() => {
        if (token) {
            navigate('/UserInfo')
        }
    }, [])

    const handleLogin = useCallback(async () => {
        if (email && password) {
            const res = await fetchLogin({ email, password })
            await localStorage.setItem('user_access_token', JSON.stringify(res.accessToken))
            await toast.success('Successfully!')
            await navigate('/?page=1')
        } else {
            toast.error('user and password are required')
        }
    }, [email, password])

    return (
        <Fragment>
            <Helmet>
                <title>Title</title>
            </Helmet>
            <div className={cx('wrapper')}>
                <form className={cx('container')}>
                    <div className={cx('title')}>Đăng nhập</div>
                    <div className={cx('user')}>
                        <div className={cx('user-text')}>Tài khoản</div>
                        <input
                            className={cx('user-input')}
                            type="text"
                            placeholder="Nhập tài khoản"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={cx('password')}>
                        <div className={cx('password-text')}>Mật khẩu</div>
                        <input
                            className={cx('password-input')}
                            type={toggleVisibility ? ' text' : 'password'}
                            placeholder="Nhập mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="on"
                        />
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
                    <Link to={`/Register`} className={cx('register-text')}>
                        Chưa có tài khoản ?
                    </Link>
                    <div className={cx('button-confirm')} onClick={handleLogin}>
                        Xác nhận
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default Login
