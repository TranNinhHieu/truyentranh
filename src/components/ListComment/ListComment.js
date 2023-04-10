/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ListComment.module.scss'
import useQuery from '../../hooks/useQuery'
import ContentComment from '../ContentComment/ContentComment'

import { connect } from 'react-redux'
import { actFetchGetCommentsRq } from '../../redux/actions'
import { getAccessToken } from '~/utils/Authentication'
import { postComment } from '../../ApiCall/userAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteComment } from '../../ApiCall/userAPI'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function ListComment({ fetchGetComments, comments, user }) {
    const [commentContent, setCommentContent] = useState('')
    const [page, setPage] = useState(1)
    const token = getAccessToken()
    let query = useQuery()
    let navigate = useNavigate()

    useEffect(() => {
        fetchGetComments(query.get('comicId'), page)
    }, [query.get('comicId'), page])

    const handlePostComment = async () => {
        const data = {
            content: commentContent,
            comicID: query.get('comicId'),
            userID: user._id,
        }
        if (token) {
            await postComment(data, token)
            await fetchGetComments(query.get('comicId'), page)
            await setCommentContent('')
        }
    }

    const handDecreaseComments = () => {
        if (page > 0) setPage(page - 1)
    }

    const handIncreaseComments = () => {
        if (comments.length % 12 === 0) setPage(page + 1)
    }

    const handleDeleteComment = async (id) => {
        if (token) {
            await deleteComment(id)
            await fetchGetComments(query.get('comicId'), page)
        }
    }

    return (
        <>
            <div className={cx('wrapper')}>
                {token ? (
                    <div className={cx('container-message')}>
                        <textarea
                            placeholder="Hãy bình luận có văn hóa để không bị khóa tài khoản"
                            className={cx('message-content')}
                            onChange={(e) => setCommentContent(e.target.value)}
                            value={commentContent}
                        ></textarea>
                        <button className={cx('button-send')} onClick={handlePostComment}>
                            Gửi
                        </button>
                    </div>
                ) : (
                    <div className={cx('container-button-login')}>
                        <button className={cx('button-login')} onClick={() => navigate('/Login')}>
                            Cần đăng nhập để bình luận
                        </button>
                    </div>
                )}
                <div>
                    {comments.map((item, index) => (
                        <Fragment key={index}>
                            <ContentComment item={item} user={user} />
                            {user._id === item.userID && (
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className={cx('button-delete-comment')}
                                    onClick={() => handleDeleteComment(item._id)}
                                />
                            )}
                        </Fragment>
                    ))}
                    <div className={cx('button-comment')}>
                        <button className={cx('increase-comment')} onClick={() => handIncreaseComments()}>
                            Xem thêm bình luận
                        </button>
                        <button className={cx('descrease-comment')} onClick={() => handDecreaseComments()}>
                            Giảm bớt bình luận
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return { comments: state.comments, user: state.user }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchGetComments: (comicId, page) => {
            dispatch(actFetchGetCommentsRq(comicId, page))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListComment)
