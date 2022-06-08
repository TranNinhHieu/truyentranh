import { Routes, Route } from 'react-router-dom'
import classNames from 'classnames/bind'
import Content from '~/components/Content'
import TabBar from '~/components/TabBar/TabBar.js'
import SlideShow from '~/components/SlideShow/SlideShow.js'
import Footer from '~/components/Footer/Footer.js'
import TopView from '~/components/TopView/TopView.js'
import Detail from '~/components/Detail/Detail.js'
import styles from './App.module.scss'

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

                <Route path="/detail" element={<Detail />}></Route>
                <Route path="*" element={<div>404 not found</div>}></Route>
            </Routes>

            <Footer />
        </div>
    )
}

export default App
