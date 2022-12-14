import React from 'react';
import '../styles/section.css';

export default class Section extends React.Component {
    render() {
        return (
            <section className='section'>
                <div className='section-container'>
                    <div className='section-title-container'>
                        <div className='section-title'>COMPUTER SKILLS</div>
                    </div>
                    <div className='section-content' 
                         contentEditable='true' 
                         onClick={this.toggleEdit}
                         spellCheck='false'>   
                            Microsoft Word, Excel, Access, PowerPoint, Outlook Express, Microsoft
                            Windows XP and Microsoft Office XP Professional
                    </div>
                </div>
                <div className='add-item'>Add Item</div>
            </section>
        )
    }
}