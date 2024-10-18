
import './App.css'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import Slider from "./mohamed sherif/slide/slider"
import Widgets from "./mohamed sherif/widget/widgets"
import Special1 from "./mohamed sherif/special/special1"
import Special2 from "./mohamed sherif/special2/special2"
import Special3 from "./mohamed sherif/special3/special3"

function App() {
 

  return (
    <>
     <Navbar/>
     <div className="amazon-container">
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
      </div>
   <Footer/>
    </>
  )
}

export default App
