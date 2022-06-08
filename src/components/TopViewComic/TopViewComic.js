import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './TopViewComic.module.scss'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from '~/components/Image'
const cx = classNames.bind(styles)
function TopViewComic({ item }) {
    return (
        <Fragment>
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <Link to={`/detail?comicId=${item._id.$oid}`}>
                        <div className={cx('comic-image')}>
                            <Image src={`comics/truyen${item.number}/${item.thumbnail}`} />
                        </div>
                    </Link>
                </div>
                <div className={cx('comic-title-view')}>
                    <Link to={item._id.$oid}>
                        <div className={cx('comic-title')}>{item.title}</div>
                    </Link>
                    <div className={cx('comic-view')}>
                        <FontAwesomeIcon icon={faEye} className={cx('icon-eye')} />
                        {item.views}
                    </div>
                </div>
            </div>
            <hr />
        </Fragment>
    )
}

export default TopViewComic
