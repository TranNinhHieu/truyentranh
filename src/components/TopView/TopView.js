import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './TopView.module.scss'
import TopViewComic from '../TopViewComic/TopViewComic.js'
import { fetchAllComic } from '~/ApiCall/comicsAPI'
const cx = classNames.bind(styles)
function TopView() {
    const [show, setShow] = useState(0)
    const [topViewData, setTopViewData] = useState([])
    const [topNewUpdatedData, setTopNewUpdatedData] = useState([])
    useEffect(() => {
        fetchAllComic(0).then((res) => setTopViewData(res.data.comics))
        fetchAllComic(0).then((res) => setTopNewUpdatedData(res.data.comics))
    }, [])
    topViewData.sort((a, b) => (a.views > b.views ? -1 : 1))
    topNewUpdatedData.sort((a, b) => (a.createAt > b.createAt ? -1 : 1))
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-button')}>
                <div className={show === 0 ? cx('top-view', 'active') : cx('top-view')} onClick={() => setShow(0)}>
                    Lượt xem cao nhất
                </div>
                <div className={show === 1 ? cx('top-view', 'active') : cx('top-view')} onClick={() => setShow(1)}>
                    Mới cập nhật
                </div>
            </div>

            <div className={cx('list-comic')}>
                {show === 0 &&
                    topViewData?.map((item, index) => (
                        <Fragment key={index}>{index < 4 && <TopViewComic item={item} />}</Fragment>
                    ))}
                {show === 1 &&
                    topNewUpdatedData.map((item, index) => (
                        <Fragment key={index}>{index < 4 && <TopViewComic item={item} />}</Fragment>
                    ))}
            </div>
        </div>
    )
}

export default TopView
