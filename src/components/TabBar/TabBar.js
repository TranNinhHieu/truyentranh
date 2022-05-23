import React,  {useEffect, useState, useRef,  } from 'react'

import {DropdownButton, Dropdown, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import './TabBar.scss'
function TabBar () {


    return (
        <div className="tab-bar">
            <div className="top-bar">
                <img className="logo-image" src="https://firebasestorage.googleapis.com/v0/b/abca-efb7d.appspot.com/o/logovip.jpg?alt=media&token=59c9f186-5e3f-45ab-991e-fade6d9514b4"></img>
                <input className="search-input" placeholder="Bạn muốn tìm gì"></input>
                <img className="avatar" src="http://avatar.truyenvua.com/160x160/avatar_1649716632.jpg?r=r8645456"></img>
            </div>
            <div className="nav-bar">
                <label className="nav-button">Trang chủ</label>
                <div className="dropdown">
                    <button className="dropbtn">Thể loại</button>
                    <div className="dropdown-content">
                        <a href="#">Hành động</a>
                        <a href="#">Phiêu lưu</a>
                        <a href="#">Drama</a>
                    </div>
                </div>
                <label className="nav-button">Tìm truyện</label>
                <label className="nav-button">Lịch sử</label>
                <label className="nav-button">Theo dõi</label>
            </div>
            
        </div>
    )
}

export default TabBar