import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className='contact-page'>
            <h2 className='contact-us-text'>Контакты</h2>
            <p className='contact-us-text'>
                📞  0700229900
            </p>
            <div className='google-maps-wrap'>
                <div className='embed-responsive'>
                    <iframe title='map' className='embed-responsive-item'  src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d93561.51718660159!2d74.50333670995148!3d42.877119954463865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x389ec815aeffd9a5%3A0xfa38ad997ba7f33e!2zMTk0INC_0YDQvtGB0L_QtdC60YIg0KfRg9C5LCDQkdC40YjQutC10Lo!3m2!1d42.8770155!2d74.5733772!4m5!1s0x389ec815aeffd9a5%3A0xfa38ad997ba7f33e!2zMTk0INC_0YDQvtGB0L_QtdC60YIg0KfRg9C5LCDQkdC40YjQutC10Lo!3m2!1d42.8770155!2d74.5733772!5e0!3m2!1sru!2skg!4v1666440225372!5m2!1sru!2skg" />
                </div>
            </div>
            {/* <div className='contact-page-blocks'>
                <span>
                    <a href="https://u.wechat.com/kHiukVMricQxDu36sAXeX9o" target="_blank" rel="noreferrer">
                        <img src='/images/wechat.png' alt='' width="200" height="350" className='blocks-1' />
                    </a>
                </span>
                <span>
                    <a href="https://www.instagram.com/isbeautylashsalon/" target="_blank" rel="noreferrer">
                        <img src='/images/insta.png' alt='' width="200" height="350" className='blocks-1' />
                    </a>
                </span>
            </div> */}
            <div className='contact-page-times'>
                <h1 className='contact-page-title'><b>График работы</b></h1>
                <p className='contact-page-hours'>
                    Пон:  9:00 - 21:00<br></br>
                    Вт: 9:00 - 21:00<br></br>
                    Ср: 9:00 - 21:00<br></br>
                    Чт: 9:00 - 21:00<br></br>
                    Пн: 9:00 - 21:00<br></br>
                    Сб: 9:00 - 21:00<br></br>
                    Вс: 9:00 - 21:00<br></br>
                </p>
            </div>
            <div>
                <p className='location-link-para'>
                    <a href="https://www.google.com/maps/place/4808+Baldwin+Ave,+Temple+City,+CA+91780/@34.091079,-118.0508095,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2da6951f72fbb:0xae17365d6d18b47f!8m2!3d34.0910746!4d-118.0486155" className='location-link' target="_blank" rel="noreferrer">
                        Улица Чуй-194, Салон Успех
                    </a>
                </p>
            </div>
        </div>
    )
}


export default Contact;
