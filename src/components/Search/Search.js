/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import Comic from '../Comic/Comic'
import styles from './Search.module.scss'
import useQuery from '~/hooks/useQuery'

import { Helmet } from 'react-helmet-async'
import { trimString } from 'src/utils/TrimString'
import { actFetchSearchComicsRq } from 'src/redux/actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const cx = classNames.bind(styles)

function Search({ fetchSearchComics, listComic }) {
    let query = useQuery()
    const [searchInfo, setSearchInfo] = useState()
    useEffect(() => {
        setSearchInfo(trimString(query.get('searchContent')))
        fetchSearchComics(trimString(query.get('searchContent')))
    }, [query.get('searchContent')])
    return (
        <Fragment>
            <Helmet>
                <title>{`Kết quả tìm kiếm: ${searchInfo}`}</title>
            </Helmet>
            {listComic[0] ? (
                <Fragment>
                    <div className={cx('notification')}>Kết quả tìm kiếm : {searchInfo}</div>
                    <div className={cx('comic-container')}>
                        {listComic?.map((item, index) => (
                            <Fragment key={index}>
                                <div className={cx('container')}>
                                    <Link to={`/Detail?comicId=${item._id}`}>
                                        <Comic item={item} />
                                    </Link>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <div>Không tìm thấy truyện</div>
                </Fragment>
            )}
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        listComic: state.comics,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchSearchComics: (searchContent) => {
            dispatch(actFetchSearchComicsRq(searchContent))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
