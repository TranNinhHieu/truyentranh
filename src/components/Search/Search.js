/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './Search.module.scss'
import { Helmet } from 'react-helmet-async'
import useQuery from '~/hooks/useQuery'
import { trimString } from 'src/utils/TrimString'
import Comic from '../Comic'
import { searchComic } from '~/ApiCall/comicsAPI'
const cx = classNames.bind(styles)

function Search() {
    let query = useQuery()
    const [searchInfo, setSearchInfo] = useState()
    const [listComic, setListComic] = useState([])
    useEffect(() => {
        setSearchInfo(trimString(query.get('searchContent')))
        searchComic(query.get('searchContent'), 0).then((res) => setListComic(res.data.comics))
    }, [query.get('searchContent')])
    return (
        <Fragment>
            <Helmet>
                <title>{`Kết quả : ${searchInfo}`}</title>
            </Helmet>
            {listComic[0] ? (
                <Fragment>
                    <div className={cx('notification')}>Kết quả tìm kiếm : {searchInfo}</div>
                    <div className={cx('comic-container')}>
                        {listComic?.map((item, index) => (
                            <Fragment key={index}>
                                <div className={cx('container')}>
                                    <Comic item={item} />
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

export default Search
