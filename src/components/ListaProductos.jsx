import frantoio from '../Assets/frantoioVidrio.jpg'
import empeltre from '../Assets/arbequinaPlastico.jpg'
import arbequina from '../Assets/arbequinaVidrio.jpg'
import blend from '../Assets/blendGrande.jpg'




const products = [
    {
        producto: 'Frantoio',
        img: frantoio,
        descripcion: 'Variedad de origen italiano, de característico sabor frutado, muy apreciado a nivel mundial, de color verdoso, notas amargas y un final en boca de ligero picor. Es de muy alta estabilidad.',
        precio: '$300'
    },
    {
        producto: 'Empeltre',
        img: empeltre,
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ducimus itaque nihil earum voluptate sapiente numquam quasi accusantium tenetur esse aliquam impedit, atque architecto blanditiis eius ullam perferendis, soluta reiciendis.",
        precio: '$300'
    },
    {
        producto: 'Arbequina',
        img: arbequina,
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ducimus itaque nihil earum voluptate sapiente numquam quasi accusantium tenetur esse aliquam impedit, atque architecto blanditiis eius ullam perferendis, soluta reiciendis.",
        precio: '$300'
    }, {
        producto: 'Blend',
        img: blend,
        descripcion: 'Conformado por Frantoio, Empeltre y Arbequina, siendo ésta última variedad la de sabor más suave pero sin embargo muy aromática. El Blend que comercializamos es la mezcla justa para conferirle la estabilidad y robustez del Frantoio y el Empeltre, respetando las características de sabor y aroma de la Arbequina.',
        precio: '$300'
    }
]


export default products