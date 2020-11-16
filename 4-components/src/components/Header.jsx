import React, { Component } from 'react';
import logo from '../logo.svg';

const styles = {
    header: {
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white'
    }
}

export default class Header extends Component {
    render() {
        const { text, handleClick } = this.props;

        return (
            <header style={ styles.header }>
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