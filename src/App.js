import classNames from 'classnames/bind'
import TabBar from '../src/components/TabBar/TabBar'
import Footer from '~/components/Footer/Footer.js'
import styles from './App.module.scss'
import OnTopButton from '~/components/OnTopButton/OnTopButton.js'
import Body from './components/Body/Body'

import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const cx = classNames.bind(styles)

function App() {
    return (
        <Router>
            <div className={cx('wrapper')}>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <TabBar />
                <Body />
                <Footer />
                <OnTopButton />
            </div>
        </Router>
    )
}

export default App
