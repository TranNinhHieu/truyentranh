/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './History.module.scss'
import useQuery from '~/hooks/useQuery'
import Comic from '../Comic/Comic'
import NotFound from '../NotFound/NotFound'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { getAccessToken } from '~/utils/Authentication'
import { Helmet } from 'react-helmet-async'
import { connect } from 'react-redux'
import { actFetchReadComicRq } from '../../redux/actions'
import { handleButton } from 'src/utils/CreateButton'
import { removeHistory } from '../../ApiCall/userAPI'
const cx = classNames.bind(styles)

function History({ listHistory, fetchReadComics, pageQuatity }) {
    const token = getAccessToken()
    let query = useQuery()
    const page = []

    useEffect(() => {
        if (token) {
            fetchReadComics(query.get('page'), token)
        }
    }, [token, query.get('page')])

    const deleteHistory = async (item) => {
        await removeHistory(item.comicID, item.chap)
        await fetchReadComics(query.get('page'), token)
    }

    handleButton(page, pageQuatity)
    return (
        <>
            {token ? (
                <Fragment>
                    {listHistory[0] && Number.isInteger(Number(query.get('page'))) ? (
                        <div className={cx('wrapper')}>
                            <Helmet>
                                <title>Lịch sử</title>
                            </Helmet>
                            <div>Lịch sử</div>
                            <div className={cx('chapter-container')}>
                                {listHistory.map((item, index) => (
                                    <Fragment key={index}>
                                        <div className={cx('container')}>
                                            <button className={cx('delete-comic-button')}>
                                                <FontAwesomeIcon icon={faTrash} onClick={() => deleteHistory(item)} />
                                            </button>
                                            <Link to={`/Detail?comicId=${item.comicID}`}>
                                                <Comic item={item} />
                                            </Link>
                                            <Link
                                                to={`/reading?comicId=${item.comicID}&chapter=${item.chap}`}
                                                className={cx('link-to-chapter')}
                                            >
                                                Chương {item.chap}
                                            </Link>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                            <div className={cx('container-page')}>
                                {page.map((item, index) => (
                                    <Fragment key={index}>
                                        <Link to={`/History?page=${item + 1}`}>
                                            <button
                                                className={
                                                    item + 1 === Number(query.get('page'))
                                                        ? cx('page', 'active')
                                                        : cx('page')
                                                }
                                            >
                                                {item + 1}
                                            </button>
                                        </Link>
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <NotFound />
                    )}
                </Fragment>
            ) : (
                <div>Bạn cần phải đăng nhập trước</div>
            )}
        </>
    )
}
const mapStateToProps = (state) => {
    return { listHistory: state.history, pageQuatity: state.pageQuatity }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReadComics: (page, token) => {
            dispatch(actFetchReadComicRq(page, token))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(History)
