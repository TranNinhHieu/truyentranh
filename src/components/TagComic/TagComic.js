/* eslint-disable react-hooks/exhaustive-deps */

import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './TagComic.module.scss'

import { fetchAllTag, fetchDetailTag } from '~/ApiCall/tagsAPI'

import useQuery from '~/hooks/useQuery'
import { Helmet } from 'react-helmet-async'
import Comic from '../Comic'
import { Link } from 'react-router-dom'
import { fetchAllComicOfTag } from '~/ApiCall/comicsAPI'

const cx = classNames.bind(styles)

function TagComic() {
    let query = useQuery()
    const [tag, setTag] = useState()
    const [listChapter, setListChapter] = useState()
    const [tags, setTags] = useState([])
    useEffect(() => {
        fetchAllComicOfTag(query.get('tagId')).then((res) => {
            setListChapter(res.data)
        })
        fetchDetailTag(query.get('tagId')).then((res) => {
            setTag(res.data)
        })
    }, [query.get('tagId')])
    useEffect(() => {
        fetchAllTag().then((res) => setTags(res.data))
    }, [])
    return (
        <Fragment>
            {tag ? (
                <Fragment>
                    <Helmet>
                        <title>{tag?.name}</title>
                    </Helmet>
                    <div className={cx('wrapper')}>
                        <div className={cx('tag-container')}>
                            <div className={cx('title-tag')}>Truyện {tag?.name}</div>
                            <div className={cx('tag-button')}>
                                {tags.map((item) => (
                                    <Fragment key={item._id}>
                                        {item._id !== query.get('tagId') ? (
                                            <Link to={`/tag?tagId=${item._id}`} alt="Home" className={cx('tag-name')}>
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
