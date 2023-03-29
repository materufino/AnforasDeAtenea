import { useRef, useEffect } from 'react';
import estilos from './estilos/Home.module.css'
import Footer from './Footer';
import NavBar from './NavBar';
import Olivinus from './Olivinus';
import Productos from './Productos';



const Home = () => {

    const productosRef = useRef(null);

    useEffect(() => {
        if (window.location.hash === '#seccionProductos') {
            productosRef.current.scrollIntoView();
        }
    }, []);

    return (
        <>
            <header>
                <div class={estilos.hero}>
                    <h1>ÁNFORAS DE ATENEA</h1>
                </div>
            </header>

            <NavBar />
            <div ref={productosRef} id="seccionProductos">
                <Productos />
            </div>
            <div className={estilos.barraDivisoria}></div>
            <Olivinus />
            <Footer />

        </>
    )
}

export default Home;