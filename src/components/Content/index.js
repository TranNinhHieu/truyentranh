import React, { useState, Fragment, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import Comic from '~/components/Comic'
import { fetchAllComic } from '~/ApiCall/comicsAPI.js'
const cx = classNames.bind(styles)

function Content() {
    const [page, setPage] = useState(1)
    const [comics, setComics] = useState([])
    const [quantityComic, setQuantityComic] = useState([])
    useEffect(() => {
        fetchAllComic(page).then((res) => {
            setComics(res.data.comics)
        })
    }, [page])
    useEffect(() => {
        fetchAllComic(0).then((res) => {
            setQuantityComic(res.data.comics)
        })
    }, [])
    return (
        <div className={cx('wrapper')}>
            {comics.map((item, index) => (
                <Fragment key={index}>
                    {/* {Math.floor(index / 12 + 1) === page && ( */}
                    <div className={cx('container')}>
                        <Comic item={item} />
                    </div>
                    {/* )} */}
                </Fragment>
            ))}
            <div className={cx('container-page')}>
                {quantityComic.map((item, index) => (
                    <Fragment key={index}>
                        {index % 12 === 0 && (
                            <button
                                className={index / 12 + 1 === page ? cx('page', 'active') : cx('page')}
                                onClick={() => setPage(index / 12 + 1)}
                            >
                                {index / 12 + 1}
                            </button>
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default Content
