import React from 'react';
import '../styles/section.css';

export default class Section extends React.Component {
    render() {
        return (
            <section className='section'>
                <div className='section-container'>
                    <div className='section-title-container'>
                        <div className='section-title'><b>COMPUTER SKILLS</b></div>
                    </div>
                    <div className='section-content'>
                    Microsoft Word, Excel, Access, PowerPoint, Outlook Express, Microsoft
                    Windows XP and Microsoft Office XP Professional
                    </div>
                </div>
            </section>
        )
    }
}