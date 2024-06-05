import React, {useEffect} from 'react'


const ABC = () => {
  const apiKey = process.env.REACT_APP_API_ID
  const search = async (city)=>{
    try{
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data)

    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    console.log(process.env.REACT_APP_API_ID)
    search("London");
  },[])
  return (
    <div>abc</div>
  )
}

export default ABC