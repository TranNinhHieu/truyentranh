/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'

import useQuery from '~/hooks/useQuery'
import Image from '~/components/Image'
import classNames from 'classnames/bind'
import styles from './Reading.module.scss'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { fetchFullChapter, fetchAllChapterOfComic } from '~/ApiCall/chapters'
import { fetchDetailComic, updateComics } from '~/ApiCall/comicsAPI'

const cx = classNames.bind(styles)

function Reading() {
    const [listChapter, setListChapter] = useState([])
    const [chapter, setChapter] = useState({})
    const [showList, setShowList] = useState(false)
    let query = useQuery()
    useEffect(() => {
        fetchFullChapter(query.get('comicId'), query.get('chapter')).then((res) => {
            setChapter(res.data)
        })
        fetchAllChapterOfComic(query.get('comicId')).then((res) => {
            setListChapter(res.data)
        })
        fetchDetailComic(query.get('comicId')).then((res) => {
            updateComics(query.get('comicId'), { views: res.data.views + Number(1) })
        })
    }, [query.get('chapter'), query.get('comicId')])
    return (
        <>
            {chapter._id ? (
                <div className={cx('wrapper')}>
                    <Helmet>
                        {' '}
                        {console.log(query.get('chapter'))}
                        <title>{chapter.title + ' Chương ' + chapter.chap}</title>
                    </Helmet>
                    <div className={cx('infomation')}>
                        <div className={cx('direction')}>
                            <Link to="/"> Trang chủ </Link>
                            <span>/</span>
                            <Link to={`/detail?comicId=${listChapter[0]?.comicID}`}> {chapter.title} </Link>
                            <span>/</span>
                            <span> {chapter.chap} </span>
                        </div>
                        <div className={cx('title-comic')}>
                            {chapter.title} - Chương {chapter.chap}
                        </div>
                        <div className={cx('button-chap')}>
                            {listChapter[0]?.chap !== chapter.chap ? (
                                <Link
                                    to={`/reading?comicId=${listChapter[0]?.comicID}&chapter=${chapter.chap - 1}`}
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
                            <Image
                                key={index}
                                src={`comics/truyen${chapter.number}/chap${chapter.chap}/${image}`}
                                alt={chapter.thumbnail}
                            />
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

export default Reading
