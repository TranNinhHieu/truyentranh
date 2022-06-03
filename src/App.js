import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import classNames from 'classnames/bind'
import Content from '~/components/Content'
import TabBar from '~/components/TabBar/TabBar.js'
import SlideShow from '~/components/SlideShow/SlideShow.js'
import Footer from '~/components/Footer/Footer.js'
import TopView from '~/components/TopView/TopView.js'
import Detail from '~/components/Detail/Detail.js'
import styles from './App.module.scss'

import { ComicData } from '~/utils/ComicData.js'
const cx = classNames.bind(styles)

function App() {
    return (
        <div className={cx('wrapper')}>
            <TabBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <SlideShow />
                            <div className={cx('middle')}>
                                <Content />
                                <TopView />
                            </div>
                        </>
                    }
                ></Route>
                {/* <Route path="a" element={<Detail />}></Route> */}
                {ComicData.map((item) => (
                    <Fragment key={item._id.$oid}>
                        <Route path={item._id.$oid} element={<Detail item={item} />}></Route>
                    </Fragment>
                ))}
            </Routes>

            <Footer />
        </div>
    )
}

export default App
