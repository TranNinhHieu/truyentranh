/* eslint-disable react-hooks/exhaustive-deps */

import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import styles from './FollowOrLikeComicsContainer.module.scss'
import useQuery from '~/hooks/useQuery'
import Comic from '../Comic/Comic'

import { Helmet } from 'react-helmet-async'
const cx = classNames.bind(styles)

function FollowOrLikeComicsContainer({ list, page, title, typePage }) {
    let query = useQuery()
    return (
        <>
            <div className={cx('wrapper')}>
                <Helmet>
                    <title>{title}</title>
                </Helmet>

                <div>{title}</div>
                <div className={cx('chapter-container')}>
                    {list.map((item, index) => (
                        <Fragment key={index}>
                            <div className={cx('container')}>
                                <Link to={`/Detail?comicId=${item._id}`}>
                                    <Comic item={item} />
                                </Link>
                            </div>
                        </Fragment>
                    ))}
                </div>
                <div className={cx('button-container')}>
                    {page.map((item, index) => (
                        <Link to={`/${typePage}?page=${item + 1}`} key={index}>
                            <button
                                className={
                                    Number(query.get('page')) === item + 1
                                        ? cx('button-page', 'active')
                                        : cx('button-page')
                                }
                            >
                                {item + 1}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FollowOrLikeComicsContainer
