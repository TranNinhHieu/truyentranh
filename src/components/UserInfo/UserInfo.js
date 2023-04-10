/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './UserInfo.module.scss'

import { connect } from 'react-redux'
import { getAccessToken } from 'src/utils/Authentication'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function UserInfo({ user }) {
    const navigate = useNavigate()
    const token = getAccessToken()

    useEffect(() => {
        if (!token) {
            navigate('/Login')
        }
    }, [token])

    return (
        <>
            <div className={cx('wrapper')}>
                <img className={cx('avatar')} src={user.avatar} alt="anh" />
                <div className={cx('user-name')}>{user.name}</div>
                <div>{user.email}</div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { user: state.user }
}
export default connect(mapStateToProps, null)(UserInfo)
