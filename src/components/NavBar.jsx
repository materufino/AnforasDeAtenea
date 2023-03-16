import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import estilos from "./estilos/NavBar.module.css"
import { f39e } from "@fortawesome/free-solid-svg-icons"



const NavBar = () => {

    return (
        <>
            <nav class={estilos.navbar}>

                <ul class={estilos.secciones}>

                    <li class="inicio"><a href="index.html">INICIO</a></li>
                    <li class="historia"><a href="historia.html">HISTORIA</a></li>
                    <li class="producto"><a href="producto.html">NUESTRO PRODUCTO</a></li>
                    <li class="tienda"><a href="tienda.html">TIENDA</a></li>

                </ul>

            </nav>
        </>
    )
}

export default NavBar;