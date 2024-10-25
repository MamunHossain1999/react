import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
import './App.css'
import Header from './assets/Header'
import Banner from './component/Banner'
import AllPlayer from './component/AllPlayer'
import CardContainer from './component/CardContainer'
import { useEffect } from "react";
import { useState } from "react";
import Selectec from './component/Selectec'


function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active",
  });
  const [coin, setCoin] = useState(10000);

  const [resipe, setResipe]=useState([])
  
  const [allPlayer, setAballable] = useState([]);
  
    useEffect(()=>{
        fetch('player.json')
        .then(res => res.json())
        .then(data => setAballable(data))
    },[])
 
  const handleActive = (status) => {
    console.log(status)
    if (status == "cart") {

      setIsActive({
        cart: true,
        status: "cart"
      })
    } else {
      setIsActive({
        cart: false,
        status: "about"
      })
    }
  }
  
  const handleClick =() =>{
    setCoin(coin + 2000000)
  }

  const handleAdd= (resip) => {
    
    const isExit = resipe.find(
      previusResib => previusResib.player_id === resip.player_id
    )
    
        if(!isExit){
          setResipe([...resipe, resip])
        }else{
          alert('Resipes all ready exists in the queue.')
        }
        
    }
    
  return (
    <>
      <div className='w-10/12 mx-auto'>
      <Header coin={coin}></Header>
      <Banner handleClick={handleClick}></Banner>
      <div><CardContainer resipe={resipe}  isActive={isActive}  handleActive={handleActive}></CardContainer></div>
      
      {isActive.cart? <AllPlayer allPlayer={allPlayer} handleAdd={handleAdd}></AllPlayer> : <Selectec  selectet={resipe}></Selectec>}
      </div>
       
    </>
  )
}

export default App


      </>
  )
}

export default App
