import frantoio from '../Assets/frantoiosinfondo.png'
import empeltre from '../Assets/arbequina-sinfondo.png'
import arbequina from '../Assets/arbequina-removebg.png'
import blend from '../Assets/blend3-sinfondo.png'




const products = [
    {
        producto: 'Frantoio',
        img: frantoio,
        descripcion: 'Variedad de origen italiano, de característico sabor frutado, muy apreciado a nivel mundial, de color verdoso, notas amargas y un final en boca de ligero picor. Es de muy alta estabilidad.',
        precio: 'Consultar'
    },
    {
        producto: 'Empeltre',
        img: empeltre,
        descripcion: "Variedad de origen Español, no muy extendida en Argentina. Es un aceite muy fluido, de buena aceptación en boca, dulce (no amargo) y suave, con un leve final picante.",
        precio: 'Agotado'
    },
    {
        producto: 'Arbequina',
        img: arbequina,
        descripcion: "Variedad de origen Español (Región de Cataluña) muy utilizado en Argentina. Resulta de sabor muy suave, casi sin sabores amargos y con un leve picor final en boca. Por su suavidad y escaso amargor altamente recomendado y utilizado con bebes y niños.",
        precio: 'Consultar'
    }, {
        producto: 'Blend',
        img: blend,
        descripcion: 'Conformado por Frantoio, Empeltre y Arbequina, siendo ésta última variedad la de sabor más suave pero sin embargo muy aromática. El Blend que comercializamos es la mezcla justa para conferirle la estabilidad y robustez del Frantoio y el Empeltre, respetando las características de sabor y aroma de la Arbequina.',
        precio: 'Consultar'
    }
]


export default products