import React from 'react';
import image from '../assets/photo.jpg';
import '../styles/aboutSection.css';
import Modal from './Modal';

export default class AboutSection extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            photo: image,
            showModal: false
        }
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.toggleModal();
        this.setState({
            photo: e.target.firstChild.value
        })
    }

    render() {
        return (
            <section className='about-preview'>
                <div className='about-preview-photo' onClick={this.toggleModal}>
                    <img src={this.state.photo} alt='' />
                    <div className='about-preview-photo-text'>Change Photo</div>
                </div>
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
                {this.state.showModal && <Modal toggle={this.toggleModal} submit={this.handleSubmit}/>}
            </section>
        )
    }
}