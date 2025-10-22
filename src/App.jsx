import { Route,Routes } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Home from "./pages/Home"
import Tracking from "./pages/Tracking"
import Orders from "./pages/Orders"
import Checkout from "./pages/checkout"
import Notfound from "./pages/Notfound"

function App() {
  

  return (
    <>
      <NavLink to={'/'}></NavLink>
      <NavLink to={'/orders'}></NavLink>
      <NavLink to={'/tracking'}></NavLink>
      <NavLink to={'/checkout'}></NavLink>

      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/orders" element = {<Orders/>}/>
        <Route path="/tracking" element = {<Tracking />}/>
        <Route path="/checkout" element = {<Checkout />}/>
        <Route path="*" element = {<Notfound />}/>
      </Routes>
    </>
  )
}

export default App
