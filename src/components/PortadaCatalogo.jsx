import { useState } from "react"

function PortadaCatalogo() {
    let [imagenSeleccionada, setImagenSeleccionada] = useState("https://picsum.photos/id/237/200/200")
    let galeria = [
        "https://picsum.photos/id/235/200/200",
        "https://picsum.photos/id/278/200/200",
        "https://picsum.photos/id/217/200/200"
    ]

    const cambiarimagen = function() {
        let indice = Math.floor(Math.random()*3)
        console.log("pure de papa")
        setImagenSeleccionada(galeria[indice])
    }
    return (
         <div>
            <img src={imagenSeleccionada} alt="" />
            <button onClick={cambiarimagen}>cambiar</button>
         </div>
    )
}
export default PortadaCatalogo