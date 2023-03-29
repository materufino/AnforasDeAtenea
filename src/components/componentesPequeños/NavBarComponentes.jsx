import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


const Contenedor = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    cursor: pointer;
    margin: 0 auto;
    
`
const Secciones = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin:0 auto;
    background-color: rgb(54, 53, 53);
    border-radius: 0px 0px 5px 5px;
    
    box-shadow: 0px 10px 19px -3px rgb(105, 105, 105);
    ::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, #333333, #646464, #ffffff);
        z-index: 1;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.5s ease-in-out;
    }
   
    @media(min-width:37.500em) {
        width: 95%;
    }


    @media(min-width:48rem) {
        width: 90%;
    }

    @media (min-width: 61.93em) {
    
    }



`

const StyledA = styled.a`
   position: relative;
   
`




const NavBarComponentes = () => {

    const navigate = useNavigate();

    const cambiaRuta = (path) => {

        navigate(path);
    }



    return (<>
        <Contenedor>


            <Secciones>

                <li class="inicio"><StyledA onClick={() => cambiaRuta('/')}>INICIO</StyledA></li>
                <li class="historia"><StyledA onClick={() => cambiaRuta('/Historia')}>HISTORIA</StyledA></li>
                <li class="galeria"><StyledA onClick={() => cambiaRuta('/Galeria')}>GALERIA</StyledA></li>
                <li class="tienda"><Link to="/Home#seccionProductos">TIENDA</Link></li>


            </Secciones>



        </Contenedor>
    </>)
}

export default NavBarComponentes;