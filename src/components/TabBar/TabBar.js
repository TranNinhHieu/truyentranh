import React,  {useEffect, useState, useRef,  } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './TabBar.scss'
function TabBar () {


    return (
        <div className="tab-bar">
            <div className="top-bar">
                <div className="top-bar-left">
                    <img className="logo-image" src="https://firebasestorage.googleapis.com/v0/b/abca-efb7d.appspot.com/o/logovip.jpg?alt=media&token=59c9f186-5e3f-45ab-991e-fade6d9514b4"></img>
                    <div className="search">
                        <input className="search-input" placeholder="Bạn muốn tìm gì"/>
                        <button className="search-icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
                <div className="top-bar-right">
                    <img className="avatar" src="http://avatar.truyenvua.com/160x160/avatar_1649716632.jpg?r=r8645456"></img>
                </div>  
            </div>
            <div className="nav-bar">
                <div className="nav-bar-item">Trang chủ</div>
                <div className="nav-bar-item dropdown">
                    <span>Thể loại</span>
                    <div className="dropdown-content">
                        <a href="#">Hành động</a>
                        <a href="#">Phiêu lưu</a>
                        <a href="#">Drama</a>
                    </div>
                </div>
                <div className="nav-bar-item">Tìm truyện</div>
                <div className="nav-bar-item">Lịch sử</div>
                <div className="nav-bar-item">Theo dõi</div>
            </div>
            
        </div>
    )
}

export default TabBar