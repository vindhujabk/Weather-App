import { useState } from 'react'
import search from './assets/icons/search.svg'
import { useStateContext } from './Context';
import {BackgroundLayout, WeatherCard, MiniCard} from './Components'



function App() {
  const [input,setInput]=useState('')
  const {weather,location, values,place,setPlace} = useStateContext()
  //console.log(weather)


  const submitCity = () =>{
    setPlace(input)
    setInput('')
  }

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
        <div className='bg-white overflow-hidden w-[15rem] shadow-2xl rounded flex items-center p-2 g-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]'/>
          <input onKeyUp={(e)=>{
            if(e.key==='Enter'){
              submitCity()
            }
          }}
          type="text" placeholder='Search city'
          className="w-full focus:outline-none text-[#212121] text-lg" value={input} onChange={e=>setInput(e.target.value)}/>
        </div>
      </nav>
      
          <BackgroundLayout></BackgroundLayout>

          <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
            <WeatherCard 
              place={location}
              windspeed={weather.wspd}
              humidity={weather.humidity}
              temperature={weather.temp}
              heatIndex={weather.heatindex}
              iconString={weather.conditions}
              conditions={weather.conditions}
            />
          

          <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {
            values.slice(1,7).map(current=>{

              return(
              <MiniCard
              key={current.datetime}
              time={current.datetime}
              temp={current.temp}
              iconString={current.conditions}
              />
              )
            })
          }
          </div>
      </main>
    </div>
  )
}

export default App