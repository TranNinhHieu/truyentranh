/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import Content from '../Content/Content'
import SlideShow from '~/components/SlideShow/SlideShow.js'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import useQuery from 'src/hooks/useQuery'
import NotFound from '../NotFound/NotFound'
import TopView from '../TopView/TopView.js'

import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { actFetchAllComicsRq } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function Home({ fetchAllComics, comicsData }) {
    let query = useQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if (query.get('page') === null) navigate('/?page=1')
        else fetchAllComics(query.get('page'))
    }, [query.get('page')])

    return (
        <Fragment>
            {comicsData[0] && Number.isInteger(Number(query.get('page'))) && 0 < Number(query.get('page')) ? (
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
            ) : (
                <NotFound />
            )}
        </Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        comicsData: state.comics,
        pageQuatity: state.pageQuatity,
        state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllComics: (page) => {
            dispatch(actFetchAllComicsRq(page))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
