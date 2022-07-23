import React, { useState, useEffect } from 'react'

const Componente = () => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Jeferson',
        apellidos: 'Limay',
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        const timer = setInterval(() => {
            tick()
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    })

    const tick = () => {
        return setState({
            fecha: new Date(),
            edad: state.edad + 1,
            nombre: state.nombre,
            apellidos: state.apellidos,
        })
    }
    
    return (
        <div>
            <h2>
                Hora Actual: 
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    )

}

export default Componente
