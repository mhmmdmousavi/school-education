import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Adsection from './components/header/AdSection'
import Nav from './components/header/nav'
import Banner from './components/banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Adsection/>
      <Nav/>
      <Banner/>
    </>
  )
}

export default App
