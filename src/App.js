import React, {useState,useEffect} from 'react';
import cars from './cars';

const App = () => {
 const [vehicles,setVehicles] = useState(cars);
 const [index,setIndex] = useState(0);

 useEffect(()=>{

  if(index < 0){
     setIndex(vehicles.length -1);
  }
  if(index > vehicles.length -1){
    setIndex(0);
  }

 },[vehicles,index]);

 useEffect(()=>{

  let timeOut = setTimeout(()=>{
      setIndex(index + 1)
  },5000);

  return ()=>clearTimeout(timeOut);

 },[index])
  
 
 return (
    <div>
      
        <section>
      {
        vehicles.map((vehicle,vehicleIndex)=>{
          const {id,location,make,image} = vehicle;
          let placement = 'nextSlide';

          if(index === vehicleIndex){
            placement = 'activeSlide';
          }
          if(vehicleIndex === index -1 || (index === 0 && vehicleIndex === vehicles.length-1)){
            placement = 'lastSlide';
          }
          return<article key={id} className={placement}>
            <img src={image} alt={make} className='image'/>
            <h2>Make: {make}</h2>
            <h4>Location: {location}</h4>
            <h5>{`Image ${vehicleIndex + 1} of ${vehicles.length} images`}</h5>
          </article>
        })
        }  

    </section>
    <button onClick={()=>setIndex(index + 1)}>NEXT</button>
    <button onClick={()=>setIndex(index - 1)}>PREV</button>


    </div>
  
  )
}

export default App
