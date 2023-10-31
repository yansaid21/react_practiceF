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



const likedNews= [null];
const cartNews= [null];
export const Section1 = ({id, news}) => {
  const [liked, setLiked] = React.useState(false);

  console.log("news", news);
    const [cart, setCart] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [selectedNew, setSelectedNew] = React.useState(null);
    

    const handleOpen = (newId) => {
      const NewNew = news.find((theNew) => theNew._id === newId);
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
      const likedSection = (newId) =>{
        setLiked(true);
        selectedNew.liked=true
        console.log("estado del like new", selectedNew.liked );
        console.log("noticial completa liked", selectedNew);
        setLiked(false)
      }
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
            
          {selectedNew.description}
          </Typography>
          <div className="button-fav-group">
                          <Fab color="secondary" aria-label="Favorite icon" onClick={() => likedSection(theNew._id)}>
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