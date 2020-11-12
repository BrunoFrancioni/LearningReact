import React from 'react';

export default function SayHi(props) {
    return (
        <>
            <h2>Hola { props.userInfo.name }</h2>

            <button onClick={ () => props.sayHi(props.userInfo.name, props.userInfo.age) }>Say Hi</button>
        </>
    );
}