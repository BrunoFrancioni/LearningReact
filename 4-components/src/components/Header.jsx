import React, { Component } from 'react';
import logo from '../logo.svg';

export default class Header extends Component {
    render() {
        const { text, handleClick } = this.props;

        return (
            <header className="App-header">
                <img onClick={ handleClick } src={ logo } className="App-logo" alt="logo" />
                <p>
                { text }
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        );
    }
}