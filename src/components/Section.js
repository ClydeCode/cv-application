import React from 'react';
import '../styles/section.css';

export default class Section extends React.Component {
    render() {
        return (
            <section className='section'>
                <div className='section-container'>
                    <div className='section-title-container'>
                        <div className='section-title'><b>{this.props.title}</b></div>
                    </div>
                    <div className='section-content'>
                        {this.props.content}
                    </div>
                </div>
            </section>
        )
    }
}