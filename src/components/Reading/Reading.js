/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import useQuery from '~/hooks/useQuery'
import Image from '~/components/Image'
import classNames from 'classnames/bind'
import styles from './Reading.module.scss'

import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { addHistory } from '../../ApiCall/userAPI'
import { getAccessToken } from 'src/utils/Authentication'
import { connect } from 'react-redux'
import { actFetchFullChapterRq, actFetchAllChapterOfComicRq, actFetchDetailComicRq } from '../../redux/actions'

const cx = classNames.bind(styles)

function Reading({ fetchFullChapter, chapter, listChapter, fetchAllChapterOfComic, fetchDetailComic, user }) {
    const [showList, setShowList] = useState(false)
    let query = useQuery()
    const token = getAccessToken()
    const userId = user._id

    useEffect(() => {
        fetchFullChapter(query.get('comicId'), query.get('chapter'))
        fetchAllChapterOfComic(query.get('comicId'))
        fetchDetailComic(query.get('comicId'), query.get('chapter'), userId, token)

        if (token) {
            addHistory({ chap: query.get('chapter'), comicID: query.get('comicId'), userID: user._id }, token)
            console.log('add')
        }
    }, [query.get('chapter'), query.get('comicId')])

    return (
        <>
            {chapter._id ? (
                <div className={cx('wrapper')}>
                    {' '}
                    <Helmet>
                        {' '}
                        <title>{chapter.title + ' Chương ' + chapter.chap}</title>
                    </Helmet>
                    <div className={cx('infomation')}>
                        <div className={cx('direction')}>
                            <Link to="/?page=1"> Trang chủ </Link>
                            <span>/</span>
                            <Link to={`/Detail?comicId=${listChapter[0]?.comicID}`}> {chapter.title} </Link>
                            <span>/</span>
                            <span> {chapter.chap} </span>
                        </div>
                        <div className={cx('title-comic')}>
                            {chapter.title} - Chương {chapter.chap}
                        </div>
                        <div className={cx('button-chap')}>
                            {listChapter[0]?.chap !== chapter.chap ? (
                                <Link
                                    to={`/Reading?comicId=${listChapter[0]?.comicID}&chapter=${chapter.chap - 1}`}
                                    className={cx('active-button')}
                                >
                                    Chương trước
                                </Link>
                            ) : (
                                <div className={cx('deactivate-button')}> Chương trước</div>
                            )}
                            <div className={cx('dropdown')} onClick={() => setShowList(!showList)}>
                                <span className={cx('cur-chap')}>Chương {chapter.chap}</span>
                                {showList && (
                                    <div className={cx('dropdown-content')}>
                                        {listChapter?.map((item) => (
                                            <Fragment key={item._id}>
                                                <Link
                                                    to={`/reading?comicId=${item.comicID}&chapter=${item.chap}`}
                                                    alt="Home"
                                                    className={
                                                        chapter.chap === item.chap
                                                            ? cx('dropdown-item-active')
                                                            : cx('dropdown-item')
                                                    }
                                                >
                                                    <div>Chương {item.chap}</div>
                                                </Link>
                                            </Fragment>
                                        ))}
                                    </div>
                                )}
                            </div>
                            {listChapter[listChapter.length - 1]?.chap !== chapter.chap ? (
                                <Link
                                    to={`/reading?comicId=${listChapter[0]?.comicID}&chapter=${chapter.chap + 1}`}
                                    className={cx('active-button')}
                                >
                                    Chương sau
                                </Link>
                            ) : (
                                <div className={cx('deactivate-button')}> Chương sau</div>
                            )}
                        </div>
                    </div>
                    <div className={cx('image-chapter')}>
                        {chapter?.image?.map((image, index) => (
                            <div className={cx('image-container')} key={index}>
                                <Image
                                    src={`comics/truyen${chapter.number}/chap${chapter.chap}/${image}`}
                                    alt={chapter.thumbnail}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <Helmet>
                        <title>truyện không tồn tại</title>
                    </Helmet>
                    truyện không tồn tại
                </div>
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        chapter: state.chapter,
        listChapter: state.listChapter,
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFullChapter: (comicID, chapter) => {
            dispatch(actFetchFullChapterRq(comicID, chapter))
        },
        fetchAllChapterOfComic: (comicID) => {
            dispatch(actFetchAllChapterOfComicRq(comicID))
        },
        fetchDetailComic: (comicId, chap, userId, token) => {
            dispatch(actFetchDetailComicRq(comicId, true, chap, userId, token))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reading)
