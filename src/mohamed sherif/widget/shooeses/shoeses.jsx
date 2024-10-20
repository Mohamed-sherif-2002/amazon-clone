import { useEffect, useState } from "react";

function Shoeses() {
    const [shoes, setShoes] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const href = window.location.href
    useEffect(() => {
        if (loaded) {
            fetch('https://raw.githubusercontent.com/Karim-Aboualenin/Amazon-clone/main/products.json')
                .then((respon) => respon.json())
                .then((result) => {
                    const filteredShoes = [];
                    for (let i = 0; i < result.length; i++) {
                        let element = result[i];
                        if (element.category.name === 'Shoes' && filteredShoes.length < 4) {
                            filteredShoes.push(element);
                        }
                    }
                    setShoes(filteredShoes);
                    setLoaded(false);
                    console.log(result)

                });
            
        }
    }, [loaded]);

    return (
        <div className="widget">
            <h2>Shoeses</h2>
                <div className="container">
                    {shoes.map((ele,ind)=>(
                        <a href={href + ele.id} key={ind}>
                            <img src={ele.images[2]} title={ele.title} />
                        </a>
                    ))}
                </div>
        </div>
    );
}

export default Shoeses;
