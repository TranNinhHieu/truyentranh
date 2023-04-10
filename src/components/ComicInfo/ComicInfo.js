/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './ComicInfo.module.scss'
import Image from '~/components/Image'
import useQuery from 'src/hooks/useQuery'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAccessToken } from '~/utils/Authentication'
import { likeComic, followComic } from '../../ApiCall/userAPI'
import { actStatusLikeComicRq, actStatusFollowComicRq } from '../../redux/actions'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function ComicInfo({
    comic,
    tags,
    listChapter,
    fetchStatusLikeComic,
    statusLiked,
    statusFollowed,
    fetchStatusFollowComic,
}) {
    let query = useQuery()
    const token = getAccessToken()

    useEffect(() => {
        if (token) {
            fetchStatusLikeComic(query.get('comicId'), token)
            fetchStatusFollowComic(query.get('comicId'), token)
        }
    }, [])

    const handleLike = async () => {
        if (token) {
            await likeComic(query.get('comicId'), token)
            await fetchStatusLikeComic(query.get('comicId'), token)
        } else toast.warn('Bạn cần phải đăng nhập trước')
    }

    const handleFollow = async () => {
        if (token) {
            await followComic(query.get('comicId'), token)
            await fetchStatusFollowComic(query.get('comicId'), token)
        } else toast.warn('Bạn cần phải đăng nhập trước')
    }

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
                            <Link to={`/Tag?tagId=${tag._id}`} key={tag._id}>
                                <button className={cx('comic-tag')}>{tag.name}</button>
                            </Link>
                        ))}
                    </div>
                    <div className={cx('comic-button')}>
                        <Link
                            to={`/Reading?comicId=${query.get('comicId')}&chapter=${listChapter[0].chap}`}
                            className={cx('button-read-first')}
                        >
                            Đọc từ đầu
                        </Link>
                        {!statusFollowed ? (
                            <button className={cx('button-follow')} onClick={handleFollow}>
                                Theo dõi
                            </button>
                        ) : (
                            <button className={cx('button-follow')} onClick={handleFollow}>
                                <FontAwesomeIcon icon={faHeart} /> Đã Theo dõi
                            </button>
                        )}
                        {!statusLiked ? (
                            <button className={cx('button-like')} onClick={handleLike}>
                                Thích
                            </button>
                        ) : (
                            <button className={cx('button-like')} onClick={handleLike}>
                                <FontAwesomeIcon icon={faThumbsUp} /> Đã Thích
                            </button>
                        )}
                        {console.log(statusFollowed)}
                    </div>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        listChapter: state.listChapter,
        statusLiked: state.statusLiked,
        statusFollowed: state.statusFollowed,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchStatusLikeComic: (comicId, token) => {
            dispatch(actStatusLikeComicRq(comicId, token))
        },
        fetchStatusFollowComic: (comicId, token) => {
            dispatch(actStatusFollowComicRq(comicId, token))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ComicInfo)
