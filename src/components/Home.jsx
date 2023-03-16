import estilos from './estilos/Home.module.css'
import NavBar from './NavBar';
import Productos from './Productos';



const Home = () => {
    return (
        <>
            <div class={estilos.hero}>
                <h1>ÁNFORAS DE ATENEA</h1>
            </div>
            <NavBar />
            <Productos />
            <div className={estilos.barraDivisoria}></div>
        </>
    )
}

export default Home;