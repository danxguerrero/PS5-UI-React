import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Navbar';
import GameTileRow from './GameTileRow';
import GameInfoContainer from './GameInfoContainer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen'>
      <Navbar />
      <GameTileRow />
      <GameInfoContainer />
    </div>
  )
}

export default App
