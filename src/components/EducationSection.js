import React from 'react';
import SectionTitle from './SectionTitle';
import '../styles/educationSection.css';

export default class EducationSection extends React.Component {
    render() {
        return (
            <section className='education'>
                <div className='section-container'>
                    <div className='section-title-container'>
                        <div className='section-title'><b>EDUCATION</b></div>
                    </div>
                    <div className='section-content'>
                        <SectionTitle 
                            title={this.props.title}
                            date={this.props.date}
                            subtitle={this.props.subtitle}
                        />
                    </div>
                </div>
            </section>
        )
    }
}