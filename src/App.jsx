import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom'; // استيراد المكونات الخاصة بالتوجيه
import Footer from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Slider from "./mohamed sherif/slide/slider";
import Widgets from "./mohamed sherif/widget/widgets";
import Special1 from "./mohamed sherif/special/special1";
import Special2 from "./mohamed sherif/special2/special2";
import Special3 from "./mohamed sherif/special3/special3";

function Home() {
  return (
    <div className="amazon-container">
      <Slider />
      <hr />
      <Widgets />
      <hr />
      <Special1 />
      <hr />
      <Special2 />
      <hr />
      <Special3 />
      <hr />
      <Special2 />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" />
        <Route path="/category/:id"/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;