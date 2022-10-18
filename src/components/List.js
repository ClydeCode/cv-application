import React from 'react';
import '../styles/list.css';

export default class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.array.map((item) => <li>{item}</li>)}
            </ul>
        )
    }
}