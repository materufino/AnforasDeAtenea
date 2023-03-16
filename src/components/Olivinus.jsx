import { useState } from "react";
import styled from "styled-components";
import prestigioOro from "../Assets/prestigioOro.gif"
import granPrestigioOro from "../Assets/GranPrestigioOro.gif"



const ContenedorMedallas = styled.div`
display: flex;
flex-wrap: wrap;

`
const TituloMenciones = styled.h3`
    font-size: 30px;
    text-align: center;
    margin: 30px;
    font-family: 'Cinzel', serif;
`
const ParrafoMenciones = styled.p`
    text-align: center;
    width: 75%;
    margin: auto;
    font-weight: 100;
    margin-bottom: 30px;
`

const TituloMedalla = styled.h3`
    font-size: 20px;
    text-align: center;
`
const ParrafoMedalla = styled.p`
text-align: center;
`

const ContainerUnaMedalla = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: auto;
`

const Imagen = styled.img`
    width: 100px;
    &:nth-child(2){
        background-color: red;
    }
`





const Olivinus = () => {

    return (
        <>
            <div>
                <TituloMenciones>Menciones olivinus 2018</TituloMenciones>
                <ParrafoMenciones>OLIVINUS es el segundo concurso a nivel mundial para el EVOO World Ranking (extra virgin olive oil ) y el más importante y antiguo concurso Internacional de EVOO que se hace en América anualmente.</ParrafoMenciones>
                {/* Cambiar interlineado */}
            </div>
            <ContenedorMedallas>
                <ContainerUnaMedalla>
                    <TituloMedalla>Prestigio Oro</TituloMedalla>
                    <ParrafoMedalla>Medalla otorgada al aceite de oliva Empeltre Ánforas de Atenea</ParrafoMedalla>
                    <Imagen src={prestigioOro} />
                </ContainerUnaMedalla>

                <ContainerUnaMedalla>
                    <TituloMedalla>Gran Prestigio Oro</TituloMedalla>
                    <ParrafoMedalla>Medalla otorgada al aceite de oliva Frantoio Ánforas de Atenea</ParrafoMedalla>
                    <Imagen src={granPrestigioOro} />
                </ContainerUnaMedalla>
            </ContenedorMedallas>
        </>
    )
}

export default Olivinus;