/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './TopView.module.scss'
import TopViewComic from '../TopViewComic/TopViewComic.js'

import { connect } from 'react-redux'
import { actGetTopViewComicsRq } from '../../redux/actions'

const cx = classNames.bind(styles)

function TopView({ fetchTopViewComics, topViewComics }) {
    useEffect(() => {
        fetchTopViewComics()
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-button')}>
                <div className={cx('top-view', 'active')}>Lượt xem cao nhất</div>
            </div>

            <div className={cx('list-comic')}>
                {topViewComics?.map((item, index) => (
                    <Fragment key={index}>{index < 4 && <TopViewComic item={item} />}</Fragment>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        topViewComics: state.topViewComics,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTopViewComics: () => {
            dispatch(actGetTopViewComicsRq())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopView)
