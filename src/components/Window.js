import React from 'react';
import AboutSection from './AboutSection';
import Section from './Section'
import '../styles/window.css';

export default class Window extends React.Component {
    render() {
        return (
            <div className='window'>
                <AboutSection />
                <Section />
            </div>
        )
    }
}