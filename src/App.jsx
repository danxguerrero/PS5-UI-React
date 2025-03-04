import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Navbar';
import GameTileRow from './GameTileRow';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <GameTileRow />
    </>
  )
}

export default App
