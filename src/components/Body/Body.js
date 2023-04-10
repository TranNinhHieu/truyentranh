import { Routes, Route } from 'react-router-dom'
import classNames from 'classnames/bind'
import 'react-toastify/dist/ReactToastify.css'

import Home from '../Home/Home.js'
import Detail from '../Detail/Detail.js'
import Reading from '../Reading/Reading.js'
import styles from './Body.module.scss'
import NotFound from '../NotFound/NotFound'
import TagComic from '../TagComic/TagComic'
import Search from '../Search/Search'
import Login from '../Login/Login'
import Register from '../Register/Register'
import History from '../History/History'
import FollowedPage from '../FollowedPage/FollowedPage'
import LikedPage from '../LikedPage/LikedPage'
import UserInfo from '../UserInfo/UserInfo'
import Loading from '../Loading/Loading'
const cx = classNames.bind(styles)

function Body() {
    return (
        <div className={cx('wrapper')}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Detail" element={<Detail />}></Route>
                <Route path="/Reading" element={<Reading />}></Route>
                <Route path="/Tag" element={<TagComic />}></Route>
                <Route path="/Search" element={<Search />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/Register" element={<Register />}></Route>
                <Route path="/History" element={<History />}></Route>
                <Route path="/FollowedPage" element={<FollowedPage />}></Route>
                <Route path="/LikedPage" element={<LikedPage />}></Route>
                <Route path="/UserInfo" element={<UserInfo />}></Route>
                <Route path="/loading" element={<Loading />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    )
}

export default Body
