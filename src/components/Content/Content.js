import React, { Fragment } from 'react'
import classNames from 'classnames/bind'
import styles from './Content.module.scss'
import Comic from '../Comic/Comic'
import useQuery from '../../hooks/useQuery'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleButton } from '../../utils/CreateButton'

const cx = classNames.bind(styles)

function Content({ comicsData, pageQuatity }) {
    const page = []
    let query = useQuery()

    handleButton(page, pageQuatity / 12)

    return (
        <div className={cx('wrapper')}>
            {comicsData?.map((item, index) => (
                <Fragment key={index}>
                    <div className={cx('container')}>
                        <Link to={`/Detail?comicId=${item._id}`}>
                            <Comic item={item} />
                        </Link>
                    </div>
                </Fragment>
            ))}
            <div className={cx('container-page')}>
                {page.map((item, index) => (
                    <Fragment key={index}>
                        <Link to={`/?page=${item + 1}`}>
                            <button
                                className={item + 1 === Number(query.get('page')) ? cx('page', 'active') : cx('page')}
                            >
                                {item + 1}
                            </button>
                        </Link>
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        comicsData: state.comics,
        pageQuatity: state.pageQuatity,
        state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
