import estilos from '../components/estilos/Footer.module.css'
import ContactForm from './ContactForm';



const Footer = () => {




    return (

        <div className={estilos.contenedor}>

            <div className={estilos.pantalla}>
                <div className={estilos.informacion}>
                    <h5>Contactá con nosotros</h5>
                    <h6>anforasdeatenea@gmail.com</h6>
                    <h6><span>Tel: </span>+54 9 221-463-5023 </h6>
                    <h6><span>Tel 2: </span>+54 9 221-507-9240 </h6>
                    <h6>San Rafael - Mendoza - Argentina</h6>
                    <h6><span>Administracion Central:</span> Calle 39 n°735 - La Plata - Pcia. Bs.As.</h6>
                    <h6><span>Producción:</span> Ruta 143 n° 13012 – Capitan Montoya – San Rafael – Mendoza</h6>
                    <h6><span>Finca:</span> Calle Sardini sur n° 305 – San Rafael - Mendoza</h6>
                </div>
                <div className={estilos.formulario}>
                    <h5>Envíanos tu mensaje</h5>
                    <ContactForm />
                </div>
            </div>
        </div>

    )
}


export default Footer;