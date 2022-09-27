import React from 'react';
import AboutSectionPreview from './AboutSectionPreview';
import Section from './Section'
import '../styles/window.css';

export default class PreviewWindow extends React.Component {
    render() {
        return (
            <div className='window'>
                <AboutSectionPreview />
                <Section />
            </div>
        )
    }
}