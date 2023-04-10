/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './LikedPage.module.scss'
import NotFound from '../NotFound/NotFound'
import useQuery from '~/hooks/useQuery'
import FollowOrLikeComicsContainer from '../FollowOrLikeComicsContainer/FollowOrLikeComicsContainer'

import { connect } from 'react-redux'
import { actGetLikedComicsRq, actGetQuantityPageLikedRq } from '../../redux/actions'
import { getAccessToken } from '~/utils/Authentication'
import { handleButton } from '../../utils/CreateButton'

const cx = classNames.bind(styles)

function LikedPage({ fetchLikedComics, listLiked, fetchQuantityLikedComics, pageQuatity }) {
    let query = useQuery()
    const token = getAccessToken()
    const page = []

    useEffect(() => {
        if (token) {
            fetchLikedComics(query.get('page'), token)
            fetchQuantityLikedComics(token)
        }
    }, [query.get('page')])

    handleButton(page, pageQuatity)
    return (
        <>
            {token ? (
                <Fragment>
                    {listLiked[0] && Number.isInteger(Number(query.get('page'))) && 0 < Number(query.get('page')) ? (
                        <div className={cx('wrapper')}>
                            <FollowOrLikeComicsContainer
                                list={listLiked}
                                page={page}
                                title="Truyện Đã Thích"
                                typePage="LikedPage"
                            />
                        </div>
                    ) : (
                        <Fragment>
                            <NotFound />
                        </Fragment>
                    )}
                </Fragment>
            ) : (
                <div>Bạn cần phải đăng nhập trước</div>
            )}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        listLiked: state.likedOrFollowedComics,
        pageQuatity: state.pageQuatity,
        state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLikedComics: (page, token) => {
            dispatch(actGetLikedComicsRq(page, token))
        },
        fetchQuantityLikedComics: (token) => {
            dispatch(actGetQuantityPageLikedRq(token))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LikedPage)
