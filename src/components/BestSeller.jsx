import "./BestSeller.scss"
import ProductTitle from "./ProductTitle"

function BestSeller() { 
    const producto1 = {
        'titulo': "producto1",
        'product_img': 'https://picsum.photos/id/281/200/200'
    }
    const producto2 = {
        'titulo': "producto1",
        'product_img': 'https://picsum.photos/id/281/200/200'
    }
    const producto3 = {
        'titulo': "producto1",
        'product_img': 'https://picsum.photos/id/281/200/200'
    }
    const producto4 = {
        'titulo': "producto1",
        'product_img': 'https://picsum.photos/id/281/200/200'
    }
    return (
        <div className="section-best">
            <h2 className="section-best__title">BEST SELLER</h2>
            <div className="section-best__products">
                <ProductTitle producto={producto1}/>
                <ProductTitle producto={producto2}/>
            </div>
            <h2 className="section-best__title">BEST SELLER</h2>
            <div className="section-best__products">
                <ProductTitle producto={producto3}/>
                <ProductTitle producto={producto4}/>
            </div>
        </div>
    )
}
export default BestSeller