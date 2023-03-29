import styled from "styled-components";
import NavBarComponentes from "./componentesPequeños/NavBarComponentes";
import imagenFondo from "../Assets/fincaArriba.jpg"

const Contenedor = styled.div`
    
    line-height: 30px;
    margin: auto;
    border-radius: 10px;
    padding: 80px;
    box-shadow: 0px 10px 19px -3px rgb(105, 105, 105);
    @media (min-width:37.500em) {
            
            margin-top: -64px;
         
        }
        @media(min-width:48rem) {
            margin-top: -32px;
            width: 75%;
            
        }
        @media(min-width:61.93em) {
            width: 80%;
        } 
`
const Titulo = styled.h2`
    font-family: 'Cinzel', serif;
    font-weight: 500;
    font-size: 35px;
    text-align: center;
     @media (min-width:37.500em) {
            margin-top: 30px;
    }
    @media(min-width:48rem) {

            margin-top: 0px;
            
    }
      
`

const Parrafo = styled.p`
    font-size:20px; 
    margin-top: 40px;
    text-align: center;
`
const ContenedorImagen = styled.div`
    width: 100%;
    height: 500px;
    margin-top: -15px;
    box-shadow: 10px 10px 19px 10px rgb(139, 139, 139);
    margin-bottom: -20px;
    
    img{
        width: 100%;
        height: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
       
    }

     @media(min-width:37.500em) {
       
    }


    @media(min-width:48rem) {
        
    }

    @media (min-width: 61.93em) {
        
    
    }

`

const Historia = () => {
    return (
        <>
            <NavBarComponentes />
            <Contenedor>
                <Titulo>Nuestra Historia</Titulo>
                <Parrafo>«Seré breve…» dijo el del discurso interminable. Pero en este caso es así, ya que nuestra historia como productores de aceite es muy reciente. Somos un establecimiento que por años se dedicó a la producción primaria únicamente, pero queríamos poder tener nuestro producto para ofrecer al consumo, sabiendo que en él pondríamos toda nuestra pasión y esfuerzo. Pasión y esfuerzo que rindieron sus frutos inmediatamente ya que, una vez analizadas las muestras por el INTI y a la luz de los resultados, decidimos participar del prestigioso certamen internacional OLIVINUS 2018 con nuestros varietales, obteniendo un Gran Prestigio Oro para nuestro Frantoio y Prestigio Oro para el Empeltre.
                    Nuestro establecimiento de elaboración es de pequeña capacidad, ya que queríamos ser capaces de monitorear al detalle cada etapa para lograr nuestro objetivo: calidad por sobre cantidad.
                    Los importantísimos reconocimientos obtenidos no hicieron más que estimularnos para redoblar nuestro esfuerzo en seguir por el camino que nos habíamos trazado desde el comienzo: producir Aceite de Oliva Virgen Extra de la mayor calidad y ampliar nuestra capacidad sólo cuando tuviéramos las pruebas de tener lo que buscábamos. Pruebas que se lograron con creces.
                </Parrafo>
            </Contenedor>

            <ContenedorImagen>
                <img src={imagenFondo} alt="slider" />
            </ContenedorImagen>

        </>
    )
}

export default Historia;