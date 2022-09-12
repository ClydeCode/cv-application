import React from 'react';
import image from '../assets/photo.jpg'
import '../styles/aboutSectionPreview.css'

export default class AboutSectionPreview extends React.Component {
    render() {
        return (
            <div className='about-preview'>
                <div className='about-preview-photo'><img src={image} alt='' /></div>
                <div className='about-preview-otherside'>
                    <div className='about-preview-name'><b>James</b> Watson</div>
                    <div className='about-preview-address'>
                        956, 31st Street 
                        NYC - 10001 
                        United States
                    </div>
                    <div className='about-preview-email'>james.w@gmail.com</div>
                    <div className='about-preview-website'>https://makelife.com</div>
                    <div className='about-preview-phone'>(456) 789 125</div>
                </div>
            </div>
        )
    }
}