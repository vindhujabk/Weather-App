import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context';
import Clear from '../assets/images/Clear.jpg';
import Cloudy from '../assets/images/Cloudy.jpg';
import fog from '../assets/images/fog.png';
import Rainy from '../assets/images/Rainy.jpg';
import Snowy from '../assets/images/Snowy.jpg';
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg';


const BackgroundLayout = () => {

const {weather}=useStateContext()
const [image,setImage] = useState(Clear)

useEffect(()=>{
  if(weather.conditions){
  let imageString= weather.conditions;
    if(imageString.toLowerCase().includes('clear')){
      setImage(Clear)
    }else if(imageString.toLowerCase().includes('fog')){
      setImage(fog)
    }else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower') || imageString.toLowerCase().includes('overcast')){
      setImage(Rainy)
    }else if(imageString.toLowerCase().includes('snow')){
      setImage(Snowy)
    }else if(imageString.toLowerCase().includes('cloud') || imageString.toLowerCase().includes('overcast')){
      setImage(Cloudy)
    }else if(imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')){
      setImage(Stormy)
    }else if(imageString.toLowerCase().includes('sun')){
      setImage(Sunny)
    }

  }
  },[weather])


  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-10' />
  )
}

export default BackgroundLayout