import React from 'react';
import '../styles/modal.css';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.target.className === "modal") this.props.toggle();
    }

    render() {
        return (
            <div className='modal' onClick={this.handleClick}>
                <div className='modal-content'>
                    <form onSubmit={this.props.submit}>
                        <input type='url' placeholder='URL'></input>
                        <input type='submit' value='Submit'></input>
                    </form>
                </div>
            </div>
        )
    }
}