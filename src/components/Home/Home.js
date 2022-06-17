import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import Content from '~/components/Content'

import SlideShow from '~/components/SlideShow/SlideShow.js'

import TopView from '~/components/TopView/TopView.js'

import classNames from 'classnames/bind'
import styles from './Home.module.scss'
const cx = classNames.bind(styles)

function Home() {
    return (
        <Fragment>
            <Helmet>
                <title>Trang chủ</title>
            </Helmet>
            <SlideShow />
            <div className={cx('middle')}>
                <Content />
                <TopView />
            </div>
        </Fragment>
    )
}

export default Home
