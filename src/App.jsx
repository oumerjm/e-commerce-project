import { Route,Routes } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Home from "./pages/Home"
import checkout from "./pages/checkout"
import tracking from "./pages/tracking"
import Orders from "./pages/Orders"

function App() {
  

  return (
    <>
      <NavLink to={'/'}></NavLink>
      <NavLink to={'/orders'}></NavLink>
      <NavLink to={'/tracking'}></NavLink>
      <NavLink to={'/checkout'}></NavLink>

      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/orders" element = {Orders}/>
        <Route path="/tracking" element = {tracking}/>
        <Route path="/checkout" element = {checkout}/>
      </Routes>
    </>
  )
}

export default App
