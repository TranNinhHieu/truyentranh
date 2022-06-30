/* eslint-disable react-hooks/exhaustive-deps */

import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './TagComic.module.scss'

import { TagData } from 'src/utils/TagData'
import { ComicData } from 'src/utils/ComicData'

import useQuery from '~/hooks/useQuery'
import { Helmet } from 'react-helmet-async'
import Comic from '../Comic'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function TagComic() {
    let query = useQuery()
    const [tag, setTag] = useState()
    const [listChapter, setListChapter] = useState()
    const [show, setShow] = useState()
    useEffect(() => {
        let curTag = TagData.filter((item) => item._id.$oid === query.get('tagId'))
        let curListChapter = ComicData.filter(function (item) {
            let comic
            for (let i = 0; i < item.tagID.length; i++) {
                if (query.get('tagId') === item.tagID[i].$oid) {
                    comic = item
                }
            }
            return comic
        })
        if (curTag[0] === undefined) {
            setShow(false)
        } else {
            setShow(true)
            setTag(curTag[0])
            setListChapter(curListChapter)
        }
    }, [query.get('tagId')])
    return (
        <Fragment>
            {show ? (
                <Fragment>
                    <Helmet>
                        <title>{tag?.name}</title>
                    </Helmet>
                    <div className={cx('wrapper')}>
                        <div className={cx('tag-container')}>
                            <div className={cx('title-tag')}>Truyện {tag?.name}</div>
                            <div className={cx('tag-button')}>
                                {TagData.map((item) => (
                                    <Fragment key={item._id.$oid}>
                                        {item._id.$oid !== query.get('tagId') ? (
                                            <Link
                                                to={`/tag?tagId=${item._id.$oid}`}
                                                alt="Home"
                                                className={cx('tag-name')}
                                            >
                                                <div>{item.name}</div>
                                            </Link>
                                        ) : (
                                            <div className={cx('tag-name-active')}>{item.name}</div>
                                        )}
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                        <div className={cx('chapter-container')}>
                            {listChapter?.map((item, index) => (
                                <Fragment key={index}>
                                    <div className={cx('container')}>
                                        <Comic item={item} />
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <Helmet>
                        <title>Thể loại truyện không tồn tại</title>
                    </Helmet>
                    <div>Thể loại truyện không tồn tại</div>
                </Fragment>
            )}
        </Fragment>
    )
}

export default TagComic
