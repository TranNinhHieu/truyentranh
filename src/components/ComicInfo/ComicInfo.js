import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './ComicInfo.module.scss'

import Image from '~/components/Image'

const cx = classNames.bind(styles)
function ComicInfo(item) {
    const { comic, tags } = item
    return (
        <>
            <div className={cx('comic-info')}>
                <div className={cx('comic-thumbnai')}>
                    {comic.number && <Image src={`comics/truyen${comic?.number}/${comic?.thumbnail}`} />}
                </div>
                <div className={cx('infomation')}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={cx('title')} colSpan="2">
                                    {comic.title}
                                </td>
                            </tr>
                            <tr className={cx('comic-general-description')}>
                                <td>Tác giả</td>
                                <td>{comic.author}</td>
                            </tr>
                            <tr className={cx('comic-general-description')}>
                                <td>Trạng thái</td>
                                <td>{comic.status}</td>
                            </tr>
                            <tr className={cx('comic-general-description')}>
                                <td>Lượt xem</td>
                                <td>{comic.views}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={cx('comic-tags')}>
                        {tags?.map((tag) => (
                            <Link to={`/tag?tagId=${tag._id}`} key={tag._id}>
                                <button className={cx('comic-tag')}>{tag.name}</button>
                            </Link>
                        ))}
                    </div>
                    <div className={cx('comic-button')}>
                        <button className={cx('button-read-first')}>Đọc từ đầu</button>
                        <button className={cx('button-follow')}>Theo dõi</button>
                        <button className={cx('button-like')}>Thích</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComicInfo
