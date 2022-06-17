import React, { Fragment } from 'react'
import classNames from 'classnames/bind'

import styles from './NotFound.module.scss'

import { Helmet } from 'react-helmet-async'

const cx = classNames.bind(styles)

function NotFound() {
    document.title = 'Page Not Found'
    return (
        <Fragment>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <div className={cx('wraper')}>Page Not Found</div>
        </Fragment>
    )
}

export default NotFound
