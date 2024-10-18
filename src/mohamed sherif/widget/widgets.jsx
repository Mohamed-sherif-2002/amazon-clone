import Shoeses from "./shooeses/shoeses"
import Clothes from "./clothes/clothes"
import Electronics from "./electronics/electronics"
import Furniture from "./furniture/furniture"
import  "../css/widgets.css"
function Widgets(){
    return(
        <div className="widgets">
            <Shoeses />
            <Clothes />
            <Electronics />
            <Furniture />
        </div>
    )
}
export default Widgets