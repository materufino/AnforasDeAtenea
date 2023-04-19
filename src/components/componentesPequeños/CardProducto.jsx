import { useState } from "react"
import styled from "styled-components"
import PopUp from "./PopUp"



const ContenedorCard = styled.div`
    border-top: 1px solid lightgray;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;

        @media (min-width:20.00em) {
             justify-content: center;
        }
        

        @media (min-width:37.500em) {
            
             :hover{
        box-shadow: inset 0px 0px 5px 3px rgba(230,230,230,1);
    }
         
        }
        @media(min-width:48rem) {
            justify-content: space-around;
        }
        @media(min-width:61.93em) {
            border-top: none;
            width: 45%;
            box-shadow:0px 0px 5px 1px rgba(194, 193, 193, 0.26);  
            margin-right: 10px;
            margin-bottom: 10px;
        } 
   
`

const ContenedorTexto = styled.div`
        
        @media (min-width:20.00em) {
            width: 80%;
             justify-content: center;
        }

        @media (min-width:37.500em) {
                width: 50%;
             justify-content: center;
        }
        @media(min-width:61.93em) {
            width: 85%;
            min-height: 250px;
        }
    `

const DescProducto = styled.p`
        margin-top: 25px;
        margin-bottom: 30px;
        line-height: 1.5;
        font-weight: 100;
    `

const TituloProducto = styled.h4`
        font-family: 'Cinzel', serif;
        font-size: 25px;
        width: 100%;
        margin-bottom: 30px;
        min-height: 35px;
    `

const Price = styled.span`
        position: absolute;
        bottom: 20px;
        left: 0px;
        background-color: rgb(54, 53, 53);
        padding: 7px 20px;
        text-align: center;
        display: inline - block;
        font-size: 24px;
        font-weight: 200;
        color: #fff;
        border-radius: 5px;
        box-shadow: -10px 20px 15px - 10px rgba(27, 6, 216, 0.3);
        @media (min-width:37.500em) {
             left: 20px;
        }
        @media(min-width:48rem) {
            
        }
        @media(min-width:61.93em) {
           
        } 
        
        
        
        :hover{
            text-shadow: 0px 0px 10px #797979;
            padding-right: 22px;
            transition: 0.2s;
        }

    `

const Imagen = styled.img`
        width: 200px;
        margin-bottom: 20px;
    `
const Menu = styled.ul`
 display: flex;
  justify-content: center;


`


const CardProducto = ({ producto, img, descripcion, precio }) => {

    const [estadoPopUp, setEstadoPopUp] = useState(false)


    return (
        <ContenedorCard>
            <ContenedorTexto>
                <TituloProducto>{producto}</TituloProducto>
                <DescProducto>{descripcion}</DescProducto>

                <Price>
                    <Menu>
                        <li>
                            <span onClick={() => setEstadoPopUp(!estadoPopUp)}>
                                Consultar
                            </span>
                        </li>
                    </Menu>
                </Price>
                {estadoPopUp && <PopUp estado={estadoPopUp} setEstado={setEstadoPopUp} />}
            </ContenedorTexto>
            <Imagen src={img} alt={producto} loading="lazy" />

        </ContenedorCard>
    )
}


export default CardProducto