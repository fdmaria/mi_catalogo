import "./MenuCatalogo.scss"

function MenuCatalogo() {
    let listaCategorias = ['Presentacion','Nuevo','Colección','Comida','juguetes']


    return (               
        <ul className="lista-catalogo">            
            {
                listaCategorias.map(
                    (elemento,indice) => (
                        <li key={indice} className="lista-catalogo__item">{elemento}</li>
                    )                    
                )
            }
        </ul>
        
    )

}
export default MenuCatalogo