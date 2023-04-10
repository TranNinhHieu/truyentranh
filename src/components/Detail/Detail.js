/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Detail.module.scss'
import ComicInfo from '../ComicInfo/ComicInfo.js'
import ListChapter from '../ListChapter/ListChapter.js'
import ListComment from '../ListComment/ListComment'
import useQuery from '~/hooks/useQuery'

import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { actFetchAllChapterOfComicRq, actFetchDetailComicRq } from './../../redux/actions'

const cx = classNames.bind(styles)

function Detail({ fetchAllChapterOfComic, listChapter, fetchDetailComic, comic }) {
    let query = useQuery()

    useEffect(() => {
        fetchAllChapterOfComic(query.get('comicId'))
        fetchDetailComic(query.get('comicId'))
    }, [query.get('comicId')])

    return (
        <>
            {' '}
            {listChapter[0] ? (
                <Fragment>
                    <Helmet>
                        <title>{comic?.title}</title>
                    </Helmet>
                    <div className={cx('wrapper')}>
                        <ComicInfo comic={comic} tags={comic.tags} />
                        <div className={cx('comic-description')}>
                            <div className={cx('introduction')}>Giới thiệu</div>
                            <div className={cx('description')}>{comic.description}</div>
                        </div>
                        <ListChapter listChapter={listChapter} views={comic.views} />

                        <ListComment />
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <Helmet>
                        <title>Truyện không tồn tại</title>
                    </Helmet>
                    <div> Truyện không tồn tại</div>
                </Fragment>
            )}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        listChapter: state.listChapter,
        comic: state.detailComic,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllChapterOfComic: (comicId) => {
            dispatch(actFetchAllChapterOfComicRq(comicId))
        },
        fetchDetailComic: (comicId) => {
            dispatch(actFetchDetailComicRq(comicId))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)
