import classNames from 'classnames/bind'

import Content from '~/components/Content'
import TabBar from '~/components/TabBar/TabBar.js'
import SlideShow from '~/components/SlideShow/SlideShow.js'
import Footer from '~/components/Footer/Footer.js'
import styles from './App.module.scss'
import TopView from '~/components/TopView/TopView.js'
const cx = classNames.bind(styles)

function App() {
    return (
        <div className={cx('wrapper')}>
            <TabBar />
            <SlideShow />
            <div className={cx('middle')}>
                <Content />
                <TopView />
            </div>
            <Footer />
        </div>
    )
}

export default App
