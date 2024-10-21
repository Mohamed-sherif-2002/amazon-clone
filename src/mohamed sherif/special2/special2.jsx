import { useEffect, useState } from "react";
import '../css/special2.css';

function Special2() {
    const [loaded, setLoaded] = useState(true);
    const [specialProduct, setSpecialProduct] = useState([]);
    const location = window.location

    useEffect(() => {
        if (loaded) {
            fetch('https://raw.githubusercontent.com/Karim-Aboualenin/Amazon-clone/main/products.json')
                .then((respon) => respon.json())
                .then((result) => {
                    let ran = Math.round(Math.random() * (50 - 15) + 15);
                    setSpecialProduct([result[ran]]); 
                    setLoaded(false);
                })
                .catch((error) => console.error('Error fetching data:', error)); 
        }
    }, [loaded]);

    return (
        <div className="special-product">
            {specialProduct.map((ele, ind) => (
                <div className="container" key={ind}>
                    <a href={location + ele.id}>
                        <h4>A big discount for you</h4>
                        <img src={ele.images[0]} alt={ele.title} />
                        <div>
                            
                                <h3>{ele.title}</h3>
                                <p>{ele.description}</p>
                                <div className="price-div">
                                    <span className = 'discount'>{ele.price + 15}$</span>
                                    <br />
                                    <span className = 'price'>{ele.price}$</span>
                                </div>
                            
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Special2;
