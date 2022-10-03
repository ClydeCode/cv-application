import React from 'react';
import '../styles/sectionTitle.css';

export default class SectionTitle extends React.Component {
    render() {
        return (
            <div className='title-container'>
                <div className='title-header'>
                    <div className='title'>{this.props.title}</div>
                    <div className='date'>{this.props.date}</div>
                </div>
                <div className='subtitle'>{this.props.subtitle}</div>
            </div>
        )
    }
}