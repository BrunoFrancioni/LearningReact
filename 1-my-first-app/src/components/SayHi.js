import React from 'react';
import { Button } from 'react-bootstrap';

export default function SayHi(props) {
    return (
        <>
            <h2>Hola { props.userInfo.name }</h2>

            <Button 
                onClick={ () => props.sayHi(props.userInfo.name, props.userInfo.age) }
                variant="primary"
            >Say Hi</Button>
        </>
    );
}