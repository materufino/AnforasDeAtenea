import products from './ListaProductos'
import CardProducto from './componentesPequeños/CardProducto'
import styled from 'styled-components'
import { useState } from 'react'


const ContenedorProductos = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-shadow: 0px 100px 10px -3px rgb(105, 105, 105);
    padding: 15px;
`

const TituloProductos = styled.h2`
    font-family: 'Cinzel', serif;
    font-weight: 500;
    font-size: 35px;
    text-align: center;
    margin-top: 40px;
    
`



const Productos = () => {
    const [botellas] = useState(products)
    console.log(botellas)
    return (
        <><TituloProductos>PRODUCTOS</TituloProductos>
            <ContenedorProductos>
                <div>
                </div>
                {botellas.map(producto =>
                    <CardProducto {...producto} />
                )}
            </ContenedorProductos>
        </>
    )
}

export default Productos