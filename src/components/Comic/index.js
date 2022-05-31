import React from 'react'
import classNames from 'classnames/bind'

import styles from './Comic.module.scss'

const cx = classNames.bind(styles)

function Comic(){
    return (
        <div className={cx("wrapper")}>
            <div className={cx("commic-image")}>
                    <img src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/284796230_129539429704263_5988017641190654867_n.jpg?stp=dst-jpg_p640x640&_nc_cat=111&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=r-jvC7rbVwIAX9YaggV&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT-tTzGko64-Plpxu8qNG311Gii8p7HK_Kp8yd0waIfUvQ&oe=629B25B7" alt="anh"/>
            </div>
            <div className={cx("commic-title")}>Title</div>
        </div>
    )
}

export default Comic