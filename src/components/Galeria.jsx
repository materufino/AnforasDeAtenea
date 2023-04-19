import { useState } from "react";
import styled from "styled-components";
import NavBarComponentes from "./componentesPequeños/NavBarComponentes";
import finca from '../Assets/finca.jpg'
import fincaArribaDrone from '../Assets/fincaArribaDrone.jpg'
import fincaTractor from '../Assets/fincaTractor.jpeg'
import fotoHero2 from '../Assets/fotoHero2.jpg'
import fotoHero from '../Assets/FondoHero.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const TituloProductos = styled.h2`
    font-family: 'Cinzel', serif;
    font-weight: 500;
    font-size: 35px;
    text-align: center;
    margin-top: 40px;
    
`

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 500px;
  width: 100%;
  position: relative;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 10px 19px -3px rgb(105, 105, 105);
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80%;
  margin: auto;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  position: absolute;
  bottom: 20px;
  left: calc(50% - 50px);
`;

const SliderButton = styled.button`
  
  border-radius: 5%;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin:20px;
  height: 35px;
  width: 45px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }

  &:focus {
    outline: none;
  }

`;

const SliderText = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #000000;
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 25px;
  
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
`

const Galeria = () => {
  const imagenes = [finca, fincaArribaDrone, fincaTractor, fotoHero2, fotoHero]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    const nextIndex =
      currentImageIndex === imagenes.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex =
      currentImageIndex === 0 ? imagenes.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(previousIndex);
  };

  return (<>
    <NavBarComponentes />

    <TituloProductos>Nuestra Galeria de Imagenes</TituloProductos>

    <TextContainer>

      <SliderText>
        Bienvenido a ANFORAS DE ATENEA, les presentamos nuestra Planta de Producción de aceite de oliva. Estamos encantados de compartir con usted algunas de las hermosas fotos que hemos tomado en nuestra finca. Nos apasiona la fotografía y estamos muy agradecidos con nuestros clientes por enviarnos sus mejores capturas.

      </SliderText>

    </TextContainer>

    <SliderContainer>

      <ImageContainer>
        <SliderImage src={imagenes[currentImageIndex]} loading="lazy" alt="Slider" />
      </ImageContainer>

      <ButtonContainer>
        <SliderButton onClick={handlePrevious}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </SliderButton>
        <SliderButton onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </SliderButton>
      </ButtonContainer>
    </SliderContainer>

  </>)
}

export default Galeria;