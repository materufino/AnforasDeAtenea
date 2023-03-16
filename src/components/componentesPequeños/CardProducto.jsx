import styled from "styled-components"






const ContenedorCard = styled.div`
    box-shadow: 0px -19px 5px -20px rgba(194, 193, 193, 0.26);
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
        @media (min-width:37.500em) {
         
        }
        @media(min-width:48rem) {
            justify-content: space-around;
        }
        @media(min-width:61.93em) {
            width: 45%;
            box-shadow: -3px 0px 5px 0px rgba(194, 193, 193, 0.26);
            margin-right: 10px;
        } 
`

const ContenedorTexto = styled.div`
        width: 50%;
        @media(min-width:61.93em) {
            width: 85%;
            min-height: 250px;
        }
    `

const DescProducto = styled.p`
        margin-top: 25px;
        margin-bottom: 30px;
        line-height: 1.5;
        font-weight: 100;
    `

const TituloProducto = styled.h4`
        font-family: 'Cinzel', serif;
        font-size: 25px;
        width: 100%;
        margin-bottom: 20px;
    `

const Price = styled.span`
        position: absolute;
        bottom: 20px;
        left: 0;
        background-color: rgb(54, 53, 53);
        padding: 7px 20px;
        text-align: center;
        display: inline - block;
        font-size: 24px;
        font-weight: 200;
        color: #fff;
        border-radius: 5px;
        box-shadow: -10px 20px 15px - 10px rgba(27, 6, 216, 0.3);
        :hover{
            text-shadow: 0px 0px 10px #797979;
            padding-right: 22px;
            transition: 0.2s;
        }
    `

const Imagen = styled.img`
        width: 200px;
        margin-bottom: 20px;
    `





const CardProducto = ({ producto, img, descripcion, precio }) => {

    return (
        <ContenedorCard>
            <ContenedorTexto>
                <TituloProducto>{producto}</TituloProducto>
                <DescProducto>{descripcion}</DescProducto>
                <Price>{precio}</Price>
            </ContenedorTexto>
            <Imagen src={img} />

        </ContenedorCard>
    )
}


export default CardProducto