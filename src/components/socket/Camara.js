import React, { useState } from 'react'
import Socket from '../../Socket'


export const Camara = () => {
    const [data, setData] = useState(null)
    Socket.on('stream', (image) => {

        setData(image)
    })
    return (
        <div className="App">
            <div><h1>Client</h1></div>
            {(data === null) ? <div > No hay servervidor socket</div > : < img src={data} alt="" />}
        </div >
    )
}
