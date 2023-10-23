import React from 'react'
import "./Section1.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {images} from "../../assets/images"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Fab } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export const Section1 = ({id}) => {

    

    const news= [ {
        _id: "1",
        title: "estrella de mar cura del cancer",
        subtitle: "realidad o una farsa",
        description: "científicos de la universidad de harvard han descubierto la cura del cancer en las estrellas de mar",
        created_at: "10/10/2023",
        avatar: images.bokeh,
      },
      {
        _id: "2",
        title: "facebook crece",
        subtitle: "crecimiento exponencial",
        description: "Facebook adquiere una suma gigante de acciones gracias a sus nuevas implementaciones",
        created_at: "10/10/2023",
        avatar: images.facebook3,
      },
      {
        _id: "3",
        title: "se acerca la navidad",
        subtitle: "preparen el ron y el aguardiente",
        description: "faltan pocos días para celebrar las festividades navideñas, compre su polvora hoy antes de que suba de precio",
        created_at: "10/10/2023",
        avatar: images.christmas1,
      },
      {
        _id: "4",
        title: "el arbol más viejo",
        subtitle: "¿cuantos años tendrá en realidad?",
        description: "este arbol tiene tanta cantidad de ceros en su edad, que nos ahorraremos el espacio, solo imagínese la cantidad de años que tiene",
        created_at: "10/10/2023",
        avatar: images.oldTree,
      },

    ] 
    const [open, setOpen] = React.useState(false);
    const [selectedNew, setSelectedNew] = React.useState(null);

    const handleOpen = (newId) => {
      console.log("serviceId",newId);
      console.log("News", news);
      const NewNew = news.find((theNew) => theNew._id === newId);
      console.log("service", NewNew);
      setSelectedNew(NewNew);
      setOpen(true);
    };
  const handleClose = () => setOpen(false);
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="section-content" id={id}>
      <div className='Section1'>
    {news.length > 0 ? (
  <Slider className='SectionSlider'{...sliderSettings}>
    {news.map((theNew) => (
      <div key={theNew._id}>
        <img src={theNew.avatar}/>
        <p className='sliderTitle'>{theNew.title}</p>
        <p className='sliderSubtitle'>{theNew.subtitle}</p>
        <div className='sliderCont'>

        <Button className='sliderButton' variant="contained" onClick={() => handleOpen(theNew._id)}>Ver más</Button>

      {selectedNew &&(
      <Modal className='Modal-new'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box className='Box-New'>
          <div className='Img-box-container'>
            <img  src={selectedNew.avatar} />
          </div>
          <Typography id="modal-modal-title" variant="h4" component="h6" color='#009d9d'>
          {selectedNew.title}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {selectedNew.subtitle}
          </Typography>
          <Typography id="modal-modal-description">
            <p></p>
          {selectedNew.description}
          </Typography>
          <div className="button-fav-group">
                          <Fab color="secondary" aria-label="Favorite icon">
                            <FavoriteIcon />
                          </Fab>
                          <Fab color="primary" aria-label="Favorite icon">
                            <AddShoppingCartIcon />
                          </Fab>
                          </div>
        </Box>
      </Modal>
      )}
          </div>
      </div>
    ))}
  </Slider>
) : (
  <p>no hay noticias</p>
)}
    </div>
    </div>
  )
}
