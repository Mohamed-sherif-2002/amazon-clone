import { useEffect, useState } from "react";
function Furniture(){
    const [clothe, setClothe] = useState([]);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        if (loaded) {
            fetch('https://raw.githubusercontent.com/Karim-Aboualenin/Amazon-clone/main/products.json')
                .then((respon) => respon.json())
                .then((result) => {
                    const filteredShoes = [];
                    for (let i = 0; i < result.length; i++) {
                        let element = result[i];
                        if (element.category.name === 'Furniture' && filteredShoes.length < 4) {
                            filteredShoes.push(element);
                        }
                    }
                    setClothe(filteredShoes);
                    setLoaded(false);
                });
        }
    }, [loaded]);

    return (
        <div className="widget">
            <h2>Furniture</h2>
                <div className="container">
                    {clothe.map((ele,ind)=>(
                        <a href="#" key={ind}>
                            <img src={ele.images[0]} title={ele.title}/>
                        </a>
                    ))}
                </div>
        </div>
    );
}
export default Furniture;