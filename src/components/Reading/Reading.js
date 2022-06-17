/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'

import useQuery from '~/hooks/useQuery'
import Image from '~/components/Image'
import { ComicData } from 'src/utils/ComicData'
import { ChapterData } from 'src/utils/ChapterData'

import classNames from 'classnames/bind'
import styles from './Reading.module.scss'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const cx = classNames.bind(styles)

function Reading() {
    const [comic, setComic] = useState({})
    const [listChapter, setListChapter] = useState([])
    const [chapter, setChapter] = useState({})
    const [show, setShow] = useState(true)
    const [showList, setShowList] = useState(false)
    let query = useQuery()
    useEffect(() => {
        let curComic = ComicData.filter((item) => item._id.$oid === query.get('comicId'))
        let curListChapter = ChapterData.filter((item) => item.comicID === query.get('comicId'))

        let curChapter = curListChapter.filter((item) => item.chap === Number(query.get('chapter')))
        if (curComic[0] === undefined || curChapter[0] === undefined) {
            setShow(false)
        } else {
            setComic({ ...curComic[0] })
            setListChapter(curListChapter)
            setChapter(curChapter[0])
            setShowList(false)
        }
    }, [query.get('chapter')])
    return (
        <>
            {show === true ? (
                <div className={cx('wrapper')}>
                    <Helmet>
                        <title>{comic.title + ' Chương ' + chapter.chap}</title>
                    </Helmet>
                    <div className={cx('infomation')}>
                        <div className={cx('direction')}>
                            <Link to="/"> Trang chủ </Link>
                            <span>/</span>
                            <Link to={`/detail?comicId=${comic?._id?.$oid}`}> {comic.title} </Link>
                            <span>/</span>
                            <span> {chapter.chap} </span>
                        </div>
                        <div className={cx('title-comic')}>
                            {comic.title} - Chương {chapter.chap}
                        </div>
                        <div className={cx('button-chap')}>
                            {listChapter[0]?.chap !== chapter.chap ? (
                                <Link
                                    to={`/reading?comicId=${chapter.comicID}&chapter=${chapter.chap - 1}`}
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
                                            <Fragment key={item._id.$oid}>
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
                                    to={`/reading?comicId=${chapter.comicID}&chapter=${chapter.chap + 1}`}
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
                                src={`comics/truyen${comic.number}/chap${chapter.chap}/${image}`}
                                alt={comic.thumbnail}
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
