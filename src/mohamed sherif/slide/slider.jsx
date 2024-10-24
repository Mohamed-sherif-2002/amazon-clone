import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.jpeg'
import '../css/slider.css'
import '../css/all.min.css'
function Slider(){
    let round = 0;
    function change(){
        switch(round){
                case 0:
                    document.querySelector('.img1').style = 'transform:translateX(100%)'
                    document.querySelector('.img2').style = 'transform:translateX(0)'
                    document.querySelector('.img3').style = 'transform:translateX(-100%)'
                    round++;
                break;
                case 1:
                    document.querySelector('.img1').style = 'transform:translateX(200%)'
                    document.querySelector('.img2').style = 'transform:translateX(100%)'
                    document.querySelector('.img3').style = 'transform:translateX(0%)'
                    round++;
                break;
                case 2:
                    document.querySelector('.img1').style = 'transform:translateX(0%)'
                    document.querySelector('.img2').style = 'transform:translateX(-100%)'
                    document.querySelector('.img3').style = 'transform:translateX(-200%)'
                    round = 0
                break;
            }
    }
    setInterval(()=>{
        change()
    },3000)
    return(
        <div className="slider">
            <div className="container">
                <img src={image1} alt="photo1" className="img1"/>
                <img src={image2} alt="photo2" className="img2"/>
                <img src={image3} alt="photo3" className="img3"/>
            </div>
        </div>
    )
}
export default Slider;