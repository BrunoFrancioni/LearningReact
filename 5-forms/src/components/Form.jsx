import React, { Component } from 'react';

import P from './P';

const validate = values => {
    const errors = {};

    if(!values.name) {
        errors.name = 'Field needed';
    }

    if(!values.lastname) {
        errors.lastname = 'Field needed';
    }

    return errors;
}

export default class Form extends Component {
    state = {
        errors: {}
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const { errors, ...noErrors } = this.state;
        const result = validate(noErrors);
        this.setState({ errors: result });

        if(!Object.keys(result).length) {
            console.log('Form valid');
        }

        e.target.reset();
    }

    render() {
        const { errors } = this.state;

        return (
            <form onSubmit={ this.handleSubmit }>
                <input name="name" onChange={ this.handleChange } />
                { errors.name && <P>{ errors.name }</P> }
                <input name="lastname" onChange={ this.handleChange } />
                { errors.lastname && <P>{ errors.lastname }</P> }
                <input type="submit" value="Send" />
            </form>
        );
    }
}