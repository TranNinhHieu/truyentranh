import React, { useState, Fragment } from 'react'
import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import Comic from '~/components/Comic'
import { ComicData } from '../../utils/ComicData'
const cx = classNames.bind(styles)

function Content() {
    const [page, setPage] = useState(1)

    return (
        <div className={cx('wrapper')}>
            {ComicData.map((item, index) => (
                <Fragment key={index}>
                    {Math.floor(index / 12 + 1) === page && (
                        <div className={cx('container')}>
                            <Comic item={item} />
                        </div>
                    )}
                </Fragment>
            ))}
            <div className={cx('container-page')}>
                {ComicData.map((item, index) => (
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
