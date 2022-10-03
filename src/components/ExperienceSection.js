import React from 'react';
import '../styles/experienceSection.css';

export default class ExperienceSection extends React.Component {
    render() {
        return (
            <section className='experience'>
                <div className='section-container'>
                    <div className='section-title-container'>
                        <div className='section-title'><b>WORK EXPERIENCE</b></div>
                    </div>
                    <div className='section-content'>
                        <ul>
                            <li>Performed general office duties and administrative tasks.</li>
                            <li>Prepared weekly confidential sales reports for presentation to management.</li>
                            <li>Managed the internal and external mail functions.</li>
                            <li>Provided telephone support.</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}