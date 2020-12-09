import React, { useState } from 'react';

export default function Counter() {
    const [contadorValue, actualizarContador] = useState(33);
    const [numeroDeVeces, actualizarVeces] = useState(0);

    return (
      <div>
        <span>{ contadorValue }</span>
        <button
            onClick={() => {
                actualizarContador(contadorValue + 1);
                actualizarVeces(numeroDeVeces + 1);
            }}
        >
          Incrementar +
        </button>

        <button
            onClick={() => {
                actualizarContador(contadorValue - 1);
                actualizarVeces(numeroDeVeces + 1);
            }}
        >
          Decrementar -{" "}
        </button>

        <p>Veces utilizado {numeroDeVeces}</p>
      </div>
    );
}