/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './Detail.module.scss'
import ComicInfo from '~/components/ComicInfo/ComicInfo.js'
import ListChapter from '~/components/ListChapter/ListChapter.js'

import useQuery from '~/hooks/useQuery'
import { Helmet } from 'react-helmet-async'
import { fetchAllChapterOfComic } from '~/ApiCall/chapters'
import { fetchDetailComic } from '~/ApiCall/comicsAPI'

const cx = classNames.bind(styles)

function Detail() {
    const [comic, setComic] = useState({})
    const [listChapter, setListChapter] = useState([])
    let query = useQuery()

    useEffect(() => {
        fetchAllChapterOfComic(query.get('comicId')).then((res) => {
            setListChapter(res.data)
        })
        fetchDetailComic(query.get('comicId')).then((res) => {
            setComic(res.data)
        })
    }, [query.get('comicId')])

    return (
        <>
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
                        <div></div>
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

export default Detail
