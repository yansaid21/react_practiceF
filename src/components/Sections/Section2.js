import React, { useState } from 'react'
import "./Section2.scss"

export const Section2 = ({id}) => {
  const [CardActive,SetCardActive]=useState(false)
  const [SecondCardActive,SetSecondCardActive]=useState(false)

  const ActiveFlex = () =>{
    console.log('Di clic en el card');
    const drop = document.getElementById('Drop_D');
        if (!CardActive) {
          SetCardActive((prevState)=> !prevState)
          if (drop) {
              console.log('aparece');
              drop.style.display = 'flex';
            }
            }else{
          drop.style.display="none";
          console.log("desaparece");
          SetCardActive((prevState)=> !prevState)
            }
        }
        const ActiveSecondFlex = () =>{
          console.log('Di clic en el card');
              if (!SecondCardActive) {
                const SecondDrop = document.getElementById('SecondDrop_D');
                SetSecondCardActive((prevState)=> !prevState)
                if (SecondDrop) {
                    console.log('aparece');
                    SecondDrop.style.display = 'flex';
                  }
                  }else{
                const SecondDrop = document.getElementById('SecondDrop_D');
                SecondDrop.style.display="none";
                console.log("desaparece");
                SetSecondCardActive((prevState)=> !prevState)
                  }
              }
  return (
    <div className='Section2'>
      <div className="section2_content" id={id}>
        <div className='card1' onClick={ActiveFlex}>
          <img src='https://www.abatec.com.mx/wp-content/uploads/mantenimiento-preventivo-abatec-1.png' className='CardImg'></img>
          <label>mantenimiento</label>
        </div>
        <div className='card2' onClick={ActiveSecondFlex}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQs_TwBLx2pyx9LKSgZHPgCw1KZJBySuvQgNf9e-UWEEcSZyxQs-ugI-daH0G_oqUfgU&usqp=CAU' className='CardImg'></img>
          <label>refrigeración</label>
        </div>
      </div>
        <div className='FlexD'>
          <div className='Drop_D' id='Drop_D'>
            <img className= 'CardImg' src='https://previews.123rf.com/images/patrimonio/patrimonio1309/patrimonio130900007/22122335-ilustraci%C3%B3n-de-un-mec%C3%A1nico-de-refrigeraci%C3%B3n-y-aire-acondicionado-que-sostiene-una-temperatura-vista.jpg'></img>
            <img className= 'CardImg' src='https://previews.123rf.com/images/patrimonio/patrimonio1309/patrimonio130900006/22122330-ilustraci%C3%B3n-de-una-refrigeraci%C3%B3n-y-aire-acondicionado-mec%C3%A1nico-de-la-celebraci%C3%B3n-de-una-vista.jpg'></img>
            <img className= 'CardImg' src='https://c8.alamy.com/compes/g09fg9/tecnicos-en-refrigeracion-calefaccion-y-refrigeracion-retro-g09fg9.jpg'></img>
          </div>
          <div className='Drop_D' id='SecondDrop_D'>
            <img className= 'CardImg' src='https://previews.123rf.com/images/patrimonio/patrimonio1309/patrimonio130900006/22122330-ilustraci%C3%B3n-de-una-refrigeraci%C3%B3n-y-aire-acondicionado-mec%C3%A1nico-de-la-celebraci%C3%B3n-de-una-vista.jpg'></img>
            <img className= 'CardImg' src='https://previews.123rf.com/images/patrimonio/patrimonio1309/patrimonio130900007/22122335-ilustraci%C3%B3n-de-un-mec%C3%A1nico-de-refrigeraci%C3%B3n-y-aire-acondicionado-que-sostiene-una-temperatura-vista.jpg'></img>
            <img className= 'CardImg' src='https://c8.alamy.com/compes/g09fg9/tecnicos-en-refrigeracion-calefaccion-y-refrigeracion-retro-g09fg9.jpg'></img>
          </div>
        </div>
    </div>
  )
}
