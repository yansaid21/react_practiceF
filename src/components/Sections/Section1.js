import React from 'react'
import "./Section1.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import F1 from "../../assets/images/jpg/face1.jpg";
import F2 from "../../assets/images/jpg/face2.png";
import F3 from "../../assets/images/jpg/face3.jpg";
import {images} from "../../assets/images"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  heigt: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Section1 = ({id}) => {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className='Section1'>Section1
    <div className="section-content" id={id}>
    {news.length >0?(
            news.map((theNew) =>{
    <Slider {...sliderSettings}>
                <div key={theNew._id}>
                    <img src={theNew.avatar}  />
                    <p className='sliderTitle'>{theNew.title}</p>
                    <p className='sliderSubtitle'>{theNew.subtitle}</p>
                    <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
                </div>
        </Slider>
            }
        )):(<p>no hay noticias</p>)}
    <Slider {...sliderSettings}>
        
          <div >
          <img src={F1}  />
          <p className='sliderTitle'>facebook crece</p>
          <p className='sliderSubtitle'>crecimiento exponencial</p>
          <div className='sliderCont'>

          <Button className='sliderButton' variant="contained" onClick={handleOpen}>Ver más</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <img src={images.facebook3} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
          facebook crece
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          crecimiento exponencial
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Facebook adquiere una suma gigante de acciones gracias a sus nuevas implementaciones
          </Typography>
        </Box>
      </Modal>
          </div>
          </div>
          <div>
          <img src={F2} />
          </div>
          <div>
          <img src={F3} />
          </div>
        </Slider>
    </div>
    </div>
  )
}
