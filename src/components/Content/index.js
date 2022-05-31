import React from 'react'
import classNames from 'classnames/bind'

import styles from './Content.module.scss'
import Comic from '~/components/Comic'

const cx = classNames.bind(styles)

function Content (){

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <Comic/>
            </div>
            <div className={cx("container")}>
                <Comic/>
            </div>
            <div className={cx("container")}>
                <Comic/>
            </div>
            <div className={cx("container")}>
                <Comic/>
            </div>
            <div className={cx("container")}>
                <Comic/>
            </div>
            <div className={cx("container")}>
                <Comic/>
            </div>
            <div className={cx("container")}>
                <Comic/>
            </div>
        </div>

    )
}

export default Content