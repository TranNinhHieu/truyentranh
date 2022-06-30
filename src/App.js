import { Routes, Route } from 'react-router-dom'
import classNames from 'classnames/bind'

import TabBar from '~/components/TabBar/TabBar.js'
import Home from '~/components/Home/Home.js'

import Footer from '~/components/Footer/Footer.js'

import Detail from '~/components/Detail/Detail.js'
import Reading from '~/components/Reading/Reading.js'

import styles from './App.module.scss'
import OnTopButton from '~/components/OnTopButton/OnTopButton.js'
import NotFound from '~/components/NotFound/NotFound'
import TagComic from '~/components/TagComic/TagComic'
import Search from '~/components/Search/Search'

const cx = classNames.bind(styles)

function App() {
    return (
        <div className={cx('wrapper')}>
            <TabBar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                {/* <Route path="a" element={<Detail />}></Route> */}

                <Route path="/detail" element={<Detail />}></Route>
                <Route path="/reading" element={<Reading />}></Route>

                <Route path="/tag" element={<TagComic />}></Route>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/search" element={<Search />}></Route>
            </Routes>

            <Footer />
            <OnTopButton />
        </div>
    )
}

export default App
