import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movies from './components/Movies'
import WatchlistC from './components/WatchlistC'
import Banner from './components/Banner'

const App = () => {
  let [Watchlist,setWatchlist]=useState([])
  let handlewatchlist=(movieObj)=>{
    let newarray=[...Watchlist,movieObj]
    setWatchlist(newarray)
    localStorage.setItem('moviesApp',JSON.stringify(newarray))
    console.log(newarray)
  }
  let removewatchlist=(movieObj)=>{
      let filter = Watchlist.filter((movie)=>{
        return movie.id != movieObj.id
      })
      setWatchlist(filter)
      localStorage.setItem('moviesApp',JSON.stringify(filter))
      console.log(filter)
  }
  useEffect(()=>{
    let moviesfromstorage=localStorage.getItem('moviesApp')
    if(!moviesfromstorage)
      {
      return
      }
    setWatchlist(JSON.parse(moviesfromstorage))
  },[])
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<><Banner/> <Movies handlewatchlist={handlewatchlist} removewatchlist={removewatchlist} watchlist={Watchlist}/></>}/>
      <Route path='/watchlist' element={<WatchlistC watchlist={Watchlist} setWatchlist={setWatchlist} removewatchlist={removewatchlist}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
