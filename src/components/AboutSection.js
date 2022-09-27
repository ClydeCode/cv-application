import React from 'react';
import image from '../assets/photo.jpg'
import '../styles/aboutSectionPreview.css'

export default class AboutSectionPreview extends React.Component {
    render() {
        return (
            <section className='about-preview'>
                <div className='about-preview-photo'><img src={image} alt='' /></div>
                <div className='about-preview-otherside'>
                    <div className='about-preview-name'><b>James</b> Watson</div>
                    <div className='about-preview-container'>
                        <div className='about-preview-left'>
                            <div className='about-preview-address'>
                                956, 31st Street 
                                NYC - 10001 
                                United States
                            </div>
                        </div>
                        <div className='about-preview-right'>
                            <div className='about-preview-email'><b>E-mail:</b> james.w@thecompany.com</div>
                            <div className='about-preview-website'><b>Website:</b> https://makelife.com</div>
                            <div className='about-preview-phone'><b>Phone:</b> (456) 789 125</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}