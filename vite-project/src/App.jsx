import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Adsection from './components/header/AdSection'
import Nav from './components/header/nav'
import Banner from './components/header/Banner'
import Section1 from './components/main/Section1'
import Section2 from './components/main/Section2'
import Section3 from './components/main/Section3'
import Footer1 from './components/footer/Footer1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Adsection/>
      <Nav/>
      <Banner/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer1/>
    </>
  )
}

export default App
