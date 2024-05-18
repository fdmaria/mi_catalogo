import "./Product.scss"

function ProductTitle(props){
    // const {titulo,imagen} = props.product
    return (
    <div className="product-title">
        <img className="product-title__img" src={props.producto.product_img} alt="" />
        <p className="product-title__p">{props.producto.titulo}</p>
    </div>
)
}
export default ProductTitle 