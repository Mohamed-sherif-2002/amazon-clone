import Slider from "./mohamed sherif/slide/slider"
import Widgets from "./mohamed sherif/widget/widgets"
import Special1 from "./mohamed sherif/special/special1"
import Special2 from "./mohamed sherif/special2/special2"
import Special3 from "./mohamed sherif/special3/special3"
import { BrowserRouter , Routes, Route } from 'react-router-dom'; 
import './App.css'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import Prime from './Pages/Prime';
import CreateAccount from './Pages/CreateAccount'; 
import PrimePage from './Pages/PrimePage';
import Cart from './Component/Screen/Cart/Cart'
import Clothes from './kareem abouelanen/clothes'
import Electronics from './kareem abouelanen/electronics'
import Shoes from './kareem abouelanen/Shoes'
import Furniture from './kareem abouelanen/furniture'
import BuyAgain from './Pages/BuyAgain'; 


import ProductDetailsPage from './moaz hassan/product-details-page/ProductDetailsPage'
function Home() {
  return (
    <>
        <Slider/>
        <hr/>
        <Widgets/>
        <hr />
        <Special1/>
        <hr />
        <Special2/>
        <hr />
        <Special3/>
        <hr />
        <Special2/>
    </>
  )
}
function Details() {
  return (
    <>
      <ProductDetailsPage/>
    </>
  )
}
function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />  
        <Route path="/BuyAgain" element={<BuyAgain />} />
        <Route path="/PrimePage" element={<PrimePage />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/Furniture" element={<Furniture />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Prime" element={<Prime />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
