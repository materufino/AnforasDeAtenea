import estilos from "./estilos/NavBar.module.css"
import { useNavigate } from "react-router-dom";



const NavBar = () => {

    const navigate = useNavigate();

    const cambiaRuta = (path) => {
        // Hacemos más cosas
        navigate(path);
    }

    return (
        <>
            <nav class={estilos.navbar}>

                <ul class={estilos.secciones}>

                    <li class="inicio"><a onClick={() => cambiaRuta('/')}>INICIO</a></li>
                    <li class="historia"><a onClick={() => cambiaRuta('/Historia')}>HISTORIA</a></li>
                    <li class="galeria"><a onClick={() => cambiaRuta('/Galeria')}>GALERIA</a></li>
                    <li class="tienda"> <a href="#seccionProductos"> TIENDA </a></li>

                </ul>

            </nav>
        </>
    )
}

export default NavBar;