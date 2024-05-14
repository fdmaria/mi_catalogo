import "./PortadaCatalogo.scss"
import { useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

function PortadaCatalogo() {
    let [imagenSeleccionada, setImagenSeleccionada] = useState("https://picsum.photos/id/250/480/200")
    let galeria = [
        "https://picsum.photos/id/235/580/300",
        "https://picsum.photos/id/278/580/300",
        "https://picsum.photos/id/217/580/300"
    ]

    const cambiarimagen = function() {
        let indice = Math.floor(Math.random()*3)
        console.log("pure de papa")
        setImagenSeleccionada(galeria[indice])
    }
    return (
         <div className="banner-portada"> 
            <img className="banner-portada__img-banner" src={imagenSeleccionada} alt="" />
            <div className="banner-portada__btn-controls">
                {/* <button className="" onClick={cambiarimagen}><MdKeyboardArrowLeft /></button>            */}
                {/* <button className="" onClick={cambiarimagen}><MdKeyboardArrowRight /></button>             */}
                <a href="#" className="banner-portada__btn-controls__arrow" onClick={cambiarimagen}><MdKeyboardArrowLeft /></a>
                <div className="banner-portada__btn-controls__copy"> caja de contenido</div>
                <a href="#" className="banner-portada__btn-controls__arrow" onClick={cambiarimagen}><MdKeyboardArrowRight /></a>          

            </div>
         </div>
    )
}
export default PortadaCatalogo