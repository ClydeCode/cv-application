import React from 'react';
import AboutSection from './AboutSection';
import Section from './Section';
import Title from './Title';
import List from './List';
import '../styles/window.css';

export default class Window extends React.Component {
    render() {
        return (
            <div className='window'>
                <AboutSection />
                <Section 
                    title="COMPUTER SKILLS"
                    content="Microsoft Word, Excel, Access, PowerPoint, Outlook Express, Microsoft
                    Windows XP and Microsoft Office XP Professional"
                />
                <Section 
                    title="EDUCATION"
                    content={
                        <div className='content'>
                            <Title 
                                title="MS in Accounting"
                                date="Sep 1997 — Sep 2001"
                                subtitle="University of Washington"
                            />
                            <Title 
                                title="MS in Accounting"
                                date="Sep 1997 — Sep 2001"
                                subtitle="University of Washington"
                            />
                        </div>
                    }
                />
                <Section 
                    title="EDUCATION"
                    content={
                        <Title 
                            title="MS in Accounting"
                            date="Sep 1997 — Sep 2001"
                            subtitle="University of Washington"
                        />
                    }
                />
            </div>
        )
    }
}