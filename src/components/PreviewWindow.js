import React from 'react';
import AboutSectionPreview from './AboutSectionPreview';
import '../styles/window.css';

export default class PreviewWindow extends React.Component {
    render() {
        return (
            <div className='window' id='preview-window'>
                <AboutSectionPreview />
            </div>
        )
    }
}