/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './TagComic.module.scss'
import useQuery from '~/hooks/useQuery'
import Comic from '../Comic/Comic'

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actFetchAllComicOfTagRq, actFetchDetailTagRq } from 'src/redux/actions'

const cx = classNames.bind(styles)

function TagComic({ tags, fetchAllComicOfTag, comics, tag, fetchDetailTag }) {
    let query = useQuery()

    useEffect(() => {
        fetchAllComicOfTag(query.get('tagId'))
        fetchDetailTag(query.get('tagId'))
    }, [query.get('tagId')])

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
                                            <Link to={`/Tag?tagId=${item._id}`} alt="Home" className={cx('tag-name')}>
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
                            {comics?.map((item, index) => (
                                <Fragment key={index}>
                                    <div className={cx('container')}>
                                        <Link to={`/Detail?comicId=${item._id}`}>
                                            <Comic item={item} />
                                        </Link>
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

const mapStateToProps = (state) => {
    return {
        tags: state.tags,
        comics: state.comics,
        tag: state.detailTag,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllComicOfTag: (tagID) => {
            dispatch(actFetchAllComicOfTagRq(tagID))
        },
        fetchDetailTag: (tagID) => {
            dispatch(actFetchDetailTagRq(tagID))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagComic)
