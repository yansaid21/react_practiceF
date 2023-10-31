import React from 'react'
import { Section1 } from '../Sections/Section1'
import { Section2 } from '../Sections/Section2'
import {images} from "../../assets/images"



const NewsList = () => {
    const news= [ 
      {
        _id: "1",
        title: "estrella de mar cura del cancer",
        subtitle: "realidad o una farsa",
        description: "científicos de la universidad de harvard han descubierto la cura del cancer en las estrellas de mar",
        created_at: "10/10/2023",
        avatar: images.bokeh,
        liked:false,
        cart:false
      },
      {
        _id: "2",
        title: "facebook crece",
        subtitle: "crecimiento exponencial",
        description: "Facebook adquiere una suma gigante de acciones gracias a sus nuevas implementaciones",
        created_at: "10/10/2023",
        avatar: images.facebook3,
        liked:false,
        cart:false
      },
      {
        _id: "3",
        title: "se acerca la navidad",
        subtitle: "preparen el ron y el aguardiente",
        description: "faltan pocos días para celebrar las festividades navideñas, compre su polvora hoy antes de que suba de precio",
        created_at: "10/10/2023",
        avatar: images.christmas1,
        liked:false,
        cart:false
      },
      {
        _id: "4",
        title: "el arbol más viejo",
        subtitle: "¿cuantos años tendrá en realidad?",
        description: "este arbol tiene tanta cantidad de ceros en su edad, que nos ahorraremos el espacio, solo imagínese la cantidad de años que tiene",
        created_at: "10/10/2023",
        avatar: images.oldTree,
        liked:false,
        cart:false
      },

    ]
  return (
    <div className='sections-content'>
      <Section1 news= {news}
      title="Section 1"
      id= "section1"/>
      <Section2
      news={news}
      title="Section 2"
      id="section2"/>
    </div>
  )
}

export default NewsList
