import styled from "styled-components";
import prestigioOro from "../Assets/prestigioOro.gif"
import granPrestigioOro from "../Assets/GranPrestigioOro.gif"



const ContenedorMedallas = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom:40px;

`
const TituloMenciones = styled.h3`
    font-size: 30px;
    text-align: center;
    margin: 30px;
    font-family: 'Cinzel', serif;
    padding: 10px;
    
`
const ParrafoMenciones = styled.p`
    text-align: center;
    width: 75%;
    margin: auto;
    font-weight: 100;
    margin-bottom: 50px;
    line-height:28px ;

`

const TituloMedalla = styled.h3`
    font-family: 'Cinzel', serif;
    font-size: 20px;
    text-align: center;
`
const ParrafoMedalla = styled.p`
text-align: center;
line-height: 25px;
`

const ContainerUnaMedalla = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: auto;
   border-top: 1px solid lightgray;
   padding: 20px;
   width: 100%;
   margin-bottom: 30px;
    @media (min-width:37.500em) {
            min-height: 230px;
             border: none;
             box-shadow:0px 0px 5px 1px rgba(194, 193, 193, 0.26);
             width: 40%;
        }
        @media(min-width:48rem) {
            
        }
        @media(min-width:61.93em) {
            
        } 

`

const Imagen = styled.img`
    width: 100px;
    
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