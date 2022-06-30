/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'

import styles from './Search.module.scss'
import { ComicData } from '~/utils/ComicData'
import { Helmet } from 'react-helmet-async'
import useQuery from '~/hooks/useQuery'
import { trimString } from 'src/utils/TrimString'
import Comic from '../Comic'
const cx = classNames.bind(styles)

function Search() {
    let query = useQuery()
    const [searchInfo, setSearchInfo] = useState()
    const [listComic, setListComic] = useState([])
    const [show, setShow] = useState(true)

    useEffect(() => {
        setSearchInfo(trimString(query.get('searchContent')))
        let curListComic = ComicData.filter((item) =>
            item.title2.toLowerCase().includes(trimString(query.get('searchContent')).toLowerCase()),
        )
        if (curListComic[0] === undefined) {
            setShow(false)
        } else {
            setShow(true)
            setListComic([...curListComic])
        }
    }, [query.get('searchContent')])
    return (
        <Fragment>
            <Helmet>
                <title>{`Kết quả : ${searchInfo}`}</title>
            </Helmet>
            {show ? (
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
