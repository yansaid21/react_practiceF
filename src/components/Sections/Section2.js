import React, { useState, useEffect } from "react";
import "./Section2.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import imgcat1 from "../../assets/images/jpg/1000_F_574780326_W4qG3J1MyzFsB0rP3eVGCZIG0Lf8uoei.jpg";
import imgcat2 from "../../assets/images/jpg/5818bc520a8fdcf18760175206ad8bef.jpg";
import imgcat3 from "../../assets/images/jpg/4500644-sports-car-london-bokeh-tail-light-super-car-car-ferrari-ferrari-458-italia-ferrari-458.jpg";
import imgcat4 from "../../assets/images/jpg/Bokeh.jpg";
import imgcat5 from "../../assets/images/jpg/christmas-tree-bokeh-arlane-crump.jpg";
 import s1imcat1 from "../../assets/images/jpg/beech-tree-clent-hills-worcestershire-1591489.jpg"
 import s2imcat1 from "../../assets/images/jpg/tree2.jpeg"
 import s1imcat2 from "../../assets/images/jpg/rob1.jpeg"
 import s2imcat2 from "../../assets/images/jpg/rob2.jpeg"
 import s1imcat3 from "../../assets/images/jpg/car1.jpeg"
 import s2imcat3 from "../../assets/images/jpg/car2.jpeg"
 import s1imcat4 from "../../assets/images/jpg/sea1.jpeg"
 import s2imcat4 from "../../assets/images/jpg/sea2.jpeg"
 import s1imcat5 from "../../assets/images/jpg/ch1.jpeg"
 import s2imcat5 from "../../assets/images/jpg/ch2.jpeg"
 import { useLikedNews } from "../Context/LikedNewsContext/LikedNewsContext";
 import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useCartNews } from '../Context/LikedNewsContext/LikedNewsContext';



 
export const Section2 = ({ id,news }) => {
  const [likedNewsList, setLikedNewsList] = useState([]);
  const [cartNewsList, setCartNewsList] = useState([]);

  const [Filtered,SetFiltered] = useState(false)
  const { likedNews } = useLikedNews();
  const { cartNews } = useCartNews();

  
  useEffect(() => {
    const filteredNews = news.filter(item => likedNews.includes(item._id));
    setLikedNewsList(filteredNews);
  }, [likedNews, news]);
  useEffect(() => {
    const filteredNews = news.filter(item => cartNews.includes(item._id));
    setCartNewsList(filteredNews);
  }, [cartNews, news]);
  

  const ShowServices = ((category)=>{
    if (!Filtered){
    
    const filteredService= Services.filter( item => item.categoryId === category)
    
    } })

  const Services = [
    {
      serviceId: "S1",
      categoryId: "cat1",
      serviceName: "The categ1",
      serviceImages: [s1imcat1,s2imcat1],
    },
    {
      serviceId: "S2",
      categoryId: "cat2",
      serviceName: "The categ2",
      serviceImages: [s1imcat2,s2imcat2],
    },
    {
      serviceId: "S3",
      categoryId: "cat3",
      serviceName: "The categ3",
      serviceImages: [s1imcat3,s2imcat3],
    },
    {
      serviceId: "S4",
      categoryId: "cat4",
      serviceName: "The categ4",
      serviceImages: [s1imcat4,s2imcat4],
    },
    {
      serviceId: "S5",
      categoryId: "cat5",
      serviceName: "The categ5",
      serviceImages: [s1imcat5,s2imcat5],
    },
  ];
  const categories = [
    {
      categoryId: "1",
      categoryName: "cat1",
      categoryDescription: "The categ1",
      categoryImg: imgcat1,
    },
    {
      categoryId: "2",
      categoryName: "cat2",
      categoryDescription: "The categ2",
      categoryImg: imgcat2,
    },
    {
      categoryId: "3",
      categoryName: "cat3",
      categoryDescription: "The categ3",
      categoryImg: imgcat3,
    },
    {
      categoryId: "4",
      categoryName: "cat4",
      categoryDescription: "The categ4",
      categoryImg: imgcat4,
    },
    {
      categoryId: "5",
      categoryName: "cat5",
      categoryDescription: "The categ5",
      categoryImg: imgcat5,
    },
  ];
  /*   const [SecondCardActive, SetSecondCardActive] = useState(false); */
  
  /* const ActiveSecondFlex = () => {
    console.log("Di clic en el card");
    if (!SecondCardActive) {
      const SecondDrop = document.getElementById("SecondDrop_D");
      SetSecondCardActive((prevState) => !prevState);
      if (SecondDrop) {
        console.log("aparece");
        SecondDrop.style.display = "flex";
      }
    } else {
      const SecondDrop = document.getElementById("SecondDrop_D");
      SecondDrop.style.display = "none";
      console.log("desaparece");
      SetSecondCardActive((prevState) => !prevState);
    }
  }; */

  //esto se utiliza
  return (
    <div className="Section2">
      <div className="section2_content" id={id}>
      {likedNewsList.length > 0 ? (
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {likedNewsList.map((theNew) => (
              <ImageListItem key={theNew.avatar}>
              <img
                srcSet={`${theNew.avatar}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${theNew.avatar}?w=164&h=164&fit=crop&auto=format`}
                alt={theNew.title}
                loading="lazy"
              />
            </ImageListItem>
            ))}
          </ImageList>
        ) : <p>No hay noticias en el momento</p>}
        {cartNewsList.length > 0 ? (
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {cartNewsList.map((theNew) => (
              <ImageListItem key={theNew.avatar}>
              <img
                srcSet={`${theNew.avatar}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${theNew.avatar}?w=164&h=164&fit=crop&auto=format`}
                alt={theNew.title}
                loading="lazy"
              />
            </ImageListItem>
            ))}
          </ImageList>
        ) : <p>No hay noticias en el momento</p>}
        {/* {categories.map((category) => { 
          //return (
            //<li onClick={ShowServices(category.categoryId)}>
              //<Card key={category.categoryId} sx={{ maxWidth: 345 }}>
                //<CardMedia
                  //sx={{ height: 140 }}
                  //image={category.categoryImg}
                  //title={category.categoryName}
                ///>
                //<CardContent>
                  //<Typography gutterBottom variant="h5" component="div">
                    //{category.categoryName}
                  //</Typography>
                  //<Typography variant="body2" color="text.secondary">
                    //{category.categoryDescription}
                  //</Typography>
                //</CardContent>
                //<CardActions>
                  //<Button size="small">Share</Button>
                  //<Button size="small">Learn More</Button>
                //</CardActions>
              //</Card>
            //</li>
          //);
        //})} */}
        {/* <div className='card1' onClick={ActiveFlex}>
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
          </div> */}
        
        {/* {Services.map((service) => ( 
      //<div key={service.serviceId} className="services">
        //<h2>{service.serviceName}</h2>
        //<ul className="service-images">
          //{service.serviceImages.map((image, index) => (
            //<li key={index}>
              //<Card sx={{ maxWidth: 345 }}>
                //<CardMedia
                  //sx={{ height: 140 }}
                  //image={image}
                  //title={service.serviceName}
                ///>
                //<CardContent>
                  //<Typography gutterBottom variant="h5" component="div">
                    //{service.serviceName}
                  //</Typography>
                  //<Typography variant="body2" color="text.secondary">
                    //{service.serviceName}
                  //</Typography>
                //</CardContent>
                //<CardActions>
                  //<Button size="small">Share</Button>
                  //<Button size="small">Learn More</Button>
                //</CardActions>
              //</Card>
            //</li>
          //))}
        //</ul>
      //</div>
    //))} */}
      </div>
    </div>
  );
};
