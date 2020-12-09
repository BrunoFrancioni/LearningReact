import React, { useState } from 'react';

export default function Avatar() {
    const [enabled, setEnabled] = useState(true);

    const { id,name,size } = this.props;

    const src = `https://randomuser.me/api/portraits/women/${id}.jpg`;

    let pictureClassName = "";

    if (size === "small") {
        pictureClassName = "is-small";
    } else if (size === "large") {
        pictureClassName = "is-large";
    }

    const imgClassName = enabled ? "" : "disabled";

    return (
        <picture className={pictureClassName}>
            {id ? (
                <img
                onClick = { () => {
                    setEnabled(!enabled);
                }}
                className = { imgClassName }
                src = { src }
                alt = ''
                />
            ) : (
                <i>Sin imagen</i>
            )}
            <strong>{ enabled ? name : "Desactivada" }</strong>
        </picture>
    );
}