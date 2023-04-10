/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './FollowedPage.module.scss'
import NotFound from '../NotFound/NotFound'
import FollowOrLikeComicsContainer from '../FollowOrLikeComicsContainer/FollowOrLikeComicsContainer'
import useQuery from '~/hooks/useQuery'

import { getAccessToken } from '~/utils/Authentication'
import { connect } from 'react-redux'
import { actGetFollowedComicsRq, actGetQuantityPageFollowedRq } from '../../redux/actions'
import { handleButton } from '../../utils/CreateButton'
const cx = classNames.bind(styles)

function FollowedPage({ listFollowed, pageQuatity, fetchFollowedComics, fetchQuantityFollowedComics }) {
    let query = useQuery()
    const token = getAccessToken()
    const page = []

    useEffect(() => {
        if (token) {
            fetchFollowedComics(query.get('page'), token)
            fetchQuantityFollowedComics(token)
        }
    }, [query.get('page')])

    handleButton(page, pageQuatity)
    return (
        <>
            {token ? (
                <Fragment>
                    {listFollowed[0] && Number.isInteger(Number(query.get('page'))) && 0 < Number(query.get('page')) ? (
                        <div className={cx('wrapper')}>
                            <FollowOrLikeComicsContainer
                                list={listFollowed}
                                page={page}
                                title="Truyện Đã Theo Dõi"
                                typePage="FollowedPage"
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
        listFollowed: state.likedOrFollowedComics,
        pageQuatity: state.pageQuatity,
        state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFollowedComics: (page, token) => {
            dispatch(actGetFollowedComicsRq(page, token))
        },
        fetchQuantityFollowedComics: (token) => {
            dispatch(actGetQuantityPageFollowedRq(token))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FollowedPage)
