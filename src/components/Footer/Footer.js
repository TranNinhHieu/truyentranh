import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <>
            <div className="footer">
                <div>
                    <img
                        className="footer-logo-image"
                        src="https://firebasestorage.googleapis.com/v0/b/abca-efb7d.appspot.com/o/logovip.jpg?alt=media&token=59c9f186-5e3f-45ab-991e-fade6d9514b4"
                        alt="anh"
                    ></img>
                </div>
                <div className="footer-contact-us">
                    <a href="https://www.facebook.com/Trieu.Ninh.Han/">
                        <img
                            className="footer-logo-fb"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
                            alt="anh"
                        ></img>
                    </a>
                </div>
                <div className="email">Email : 18520753@uit.edu.vn</div>
                <div className="polici">
                    Mọi thông tin và hình ảnh trên website đều được sưu tầm trên Internet. Chúng tôi không sở hữu hay
                    chịu trách nhiệm bất kỳ thông tin nào trên web này. Nếu làm ảnh hưởng đến cá nhân hay tổ chức nào,
                    khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.
                </div>
            </div>
        </>
    )
}

export default Footer
