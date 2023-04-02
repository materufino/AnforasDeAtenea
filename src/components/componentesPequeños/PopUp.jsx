import styled from "styled-components";
import React from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0,0,0,0.3);
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
`
const ContenedorPopUp = styled.div`
    display: flex;
    width: 85%;
    min-height: 150px;
    background-color: #fff;
    position: relative;
    border-radius:5px;
    box-shadow: 0px 0px 10px 2px #4e4e4e;
    display: flex;
    flex-direction: column;
    border: 1px inset #706261;
    align-items: center;

    @media (min-width:37.500em) {
             max-width: 500px;
        }


`
const EncabezadoPopUp = styled.div`
    
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;
    width: 100%;

    h3{
        font-size: 26px;
        margin-top:10px;
        font-family: 'Cinzel', serif;
        padding: 10px;
        
    }
`
const BotonCerrar = styled.button`
    position: absolute;
    top: 18px;
    right: 10px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    font-size: 20px;

    :hover{
        background-color: #f2f2f2;
        transform: rotate(180deg);
        transition: 0.5s;
        color: red;
    }
`


const ContenedorOpciones = styled.div`

    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 80px;
   
`
const BotonW = styled.a`
    
    padding: 15px;
    background-color:rgb(54, 53, 53);
    border-radius: 5px;
    color: white;
    :hover{
        box-shadow:0px 10px 19px -3px rgb(105, 105, 105) ;
        border-radius:0px;
        transition: 0.5s;
        background-color:#00bb2d  ;
    }

`

const ContenedorUnaOpcion = styled.div`
   font-size: 20px;
   font-family: 'Montserrat', sans-serif;
   
`
const StyledP = styled.p`
  color: #5a5a5ac7;

`

const PopUp = ({ estado, setEstado }) => {


    return (<>

        {estado &&
            <Overlay>


                <ContenedorPopUp>

                    <EncabezadoPopUp>
                        <h3>Seleccionar un Contacto</h3>
                    </EncabezadoPopUp>
                    <BotonCerrar onClick={() => setEstado(!estado)}><FontAwesomeIcon icon={faX} /></BotonCerrar>

                    <StyledP>Serás redirigido a WhatsApp</StyledP>

                    <ContenedorOpciones>
                        <ContenedorUnaOpcion>
                            <BotonW href='https://api.whatsapp.com/send?phone=+5492214635023&text=Hola!%20Quisiera%20saber%20el%20precio%20de%20los%20aceites%20y%20como%20obtenerlos.%20Muchas%20gracias!' target="_blank"> Pablo </BotonW>
                        </ContenedorUnaOpcion>

                        <ContenedorUnaOpcion>
                            <BotonW href='https://api.whatsapp.com/send?phone=+5492215079240&text=Hola!%20Quisiera%20saber%20el%20precio%20de%20los%20aceites%20y%20como%20obtenerlos.%20Muchas%20gracias!' target="_blank"> Mauro <i class="fa-brands fa-square-whatsapp"></i></BotonW>
                        </ContenedorUnaOpcion>
                    </ContenedorOpciones>


                </ContenedorPopUp>

            </Overlay>
        }
    </>)
}


export default PopUp;