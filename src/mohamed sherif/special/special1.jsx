import { useEffect,useState } from "react";
import '../css/special1.css'
function Special1(){
    const [products1, setProducts1] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const location = window.location

    useEffect(() => {
        if (loaded) {
            fetch('https://raw.githubusercontent.com/Karim-Aboualenin/Amazon-clone/main/products.json')
                .then((respon) => respon.json())
                .then((result) => {
                    const filteredProducts1 = [];
                    const filteredProducts2 = [];
                    for (let i = 0; i < result.length; i++) {
                        let element = result[i];
                        if (element.price < 40 && filteredProducts1.length < 5) {
                            filteredProducts1.push(element);
                        } else if (element.price < 40 && filteredProducts2.length < 5){
                            filteredProducts2.push(element);
                        }
                    }
                    setProducts1(filteredProducts1);
                    setProducts2(filteredProducts2);
                    setLoaded(false);
                });
        }
    });
    // slide 
    let round = 0;
    function change(){
        switch(round){
                case 0:
                    document.querySelector('.slide1').style = 'transform:translateX(-100%)'
                    document.querySelector('.slide2').style = 'transform:translateX(0)'
                    round++;
                break;
                case 1:
                    document.querySelector('.slide1').style = 'transform:translateX(0%)'
                    document.querySelector('.slide2').style = 'transform:translateX(100%)'
                    round = 0;
                break;
            }
    }
    setInterval(()=>{
        change()
    },3000)
    return(
        <div className="special1">
            <div className="container">
                <h2>Under 50$</h2>
                <div className="products">
                <div className="slide1">
                    {products1.map((ele,ind)=>(
                        <div key={ind} className="product">
                            <a href={location + ele.id}>
                                <img src={ele.images[1]} title={ele.title} />
                                <h4 className = 'price'>{ele.price}$</h4>
                                <h5>{ele.title}</h5>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="slide2">
                    {products2.map((ele,ind)=>(
                        <div key={ind} className="product">
                            <a href={location + ele.id}>
                                <img src={ele.images[1]} title={ele.title} />
                                <h4 className = 'price'>{ele.price}$</h4>
                                <h5>{ele.title}</h5>
                            </a>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}
export default Special1;