import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../screens/home/page'
import About from '../screens/about/page'
import Commands from '../screens/commands/page'


export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/commands" element={<Commands />} />
      </Routes>
    </BrowserRouter>
  )
}
