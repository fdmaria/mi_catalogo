import "./PortadaCatalogo.scss"
import { useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

function PortadaCatalogo() {
    let [position,setPosition] = useState(0)
    let [imagenSeleccionada, setImagenSeleccionada] = useState({
            "id" : 1,
            "image": "https://picsum.photos/id/250/480/200",
            "text" : "Caja de contenido 1",
            "link" : "https://picsum.photos/id/250/480/200"
        }
        
    )
    let galery =[
        {
            "id" : 1,
            "image": "https://picsum.photos/id/235/580/300",
            "text" :"Caja de contenido 1",
            "link" :"https://picsum.photos/id/235/580/300"
        },
        {
            "id" : 2,
            "image": "https://picsum.photos/id/278/580/300",
            "text" :"Caja de contenido 2",
            "link" :"https://picsum.photos/id/278/580/300"
        },
        {
            "id" : 3,
            "image": "https://picsum.photos/id/217/580/300",
            "text" :"Caja de contenido 3",
            "link" :"https://picsum.photos/id/217/580/300"
        }
    ]
    let galeria = [
        "https://picsum.photos/id/235/580/300",
        "https://picsum.photos/id/278/580/300",
        "https://picsum.photos/id/217/580/300"
    ]
    
    const cambiarProductoAsc = function () {
        if (position < 2){
            setPosition(position + 1)
        }else{
            setPosition(0)
        }
        
        setImagenSeleccionada(galery[position])
        
    }

    const cambiarProductoDesc = () =>{
        if (position > 0){
            setPosition(position - 1)
        }else{
            setPosition(galery.length - 1)
        }
        setImagenSeleccionada(galery[position])
        console.log(position)
    }
    const cambiarimagen = function() {
        let indice = Math.floor(Math.random()*3)
        console.log("pure de papa")
        setImagenSeleccionada(galery[indice])
    }
    return (
         <div className="banner-portada"> 
            <img className="banner-portada__img-banner" src={imagenSeleccionada.image} alt="" />
            <div className="banner-portada__btn-controls">
                {/* <button className="" onClick={cambiarimagen}><MdKeyboardArrowLeft /></button>            */}
                {/* <button className="" onClick={cambiarimagen}><MdKeyboardArrowRight /></button>             */}
                <a href="#" className="banner-portada__btn-controls__arrow" onClick={cambiarProductoDesc}><MdKeyboardArrowLeft style={{marginBottom: '-5px'}}/></a>
                <div className="banner-portada__btn-controls__copy"> {imagenSeleccionada.text}</div>
                <a href="#" className="banner-portada__btn-controls__arrow" onClick={cambiarProductoAsc}><MdKeyboardArrowRight style={{marginBottom: '-5px'}} /></a>          

            </div>
         </div>
    )
}
export default PortadaCatalogo