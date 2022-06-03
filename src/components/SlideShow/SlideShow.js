import React, { useEffect, useState, Fragment } from 'react'

import './SlideShow.scss'
import { SlideShowData } from '../../utils/SlideShowData'

function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(1)

    useEffect(() => {
        const timmer = setInterval(() => {
            let cur = currentSlide + 1
            if (cur > 4) setCurrentSlide(1)
            else setCurrentSlide(cur)
        }, 2000)
        return () => clearInterval(timmer)
    }, [currentSlide])

    return (
        <>
            <div className="slideshow-container">
                {SlideShowData.map((item) => (
                    <Fragment key={item.id}>
                        {item.id === currentSlide && (
                            <div className="mySlides fade">
                                <div className="numbertext">{item.id}</div>
                                <div className="img-container">
                                    <img className="img-slideshow" src={item.image} alt="anh" />
                                </div>
                            </div>
                        )}
                    </Fragment>
                ))}
            </div>

            <div className="containerDot">
                {SlideShowData.map((item) => {
                    return (
                        <span
                            className={item.id === currentSlide ? 'dot active' : 'dot'}
                            key={item.id}
                            onClick={() => setCurrentSlide(item.id)}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default SlideShow
