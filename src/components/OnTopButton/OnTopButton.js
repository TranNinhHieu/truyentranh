import React, { Fragment, useEffect, useState } from 'react'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import styles from './OnTopButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cx = classNames.bind(styles)
function OnTopButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    return (
        <Fragment>
            {visible && (
                <div onClick={scrollToTop} className={cx('ontop')}>
                    <FontAwesomeIcon icon={faAngleUp} className={cx('fa-angle-up')} />
                </div>
            )}
        </Fragment>
    )
}

export default OnTopButton
