/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './Detail.module.scss'
import ComicInfo from '~/components/ComicInfo/ComicInfo.js'
import ListChapter from '~/components/ListChapter/ListChapter.js'
import { ComicData } from 'src/utils/ComicData'
import { ChapterData } from 'src/utils/ChapterData'
import { FindAllTag } from 'src/utils/FindTag'

import useQuery from '~/hooks/useQuery'
import { Helmet } from 'react-helmet-async'

const cx = classNames.bind(styles)

function Detail() {
    const [comic, setComic] = useState({})
    const [listChapter, setListChapter] = useState([])
    const [show, setShow] = useState(true)
    const [tags, setTags] = useState([])
    let query = useQuery()

    useEffect(() => {
        let curComic = ComicData.filter((item) => item._id.$oid === query.get('comicId'))
        let curlistChapter = ChapterData.filter((item) => item.comicID === query.get('comicId'))
        if (curComic[0] === undefined) {
            setShow(false)
        } else {
            setComic({ ...curComic[0] })
            setTags(FindAllTag(curComic[0]))
            setListChapter(curlistChapter)
        }
    }, [query.get('comicId')])

    return (
        <>
            {show ? (
                <Fragment>
                    <Helmet>
                        <title>{comic?.title}</title>
                    </Helmet>
                    <div className={cx('wrapper')}>
                        <ComicInfo comic={comic} tags={tags} />
                        <div className={cx('comic-description')}>
                            <div className={cx('introduction')}>Giới thiệu</div>
                            <div className={cx('description')}>{comic.description}</div>
                        </div>
                        <ListChapter listChapter={listChapter} />
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
