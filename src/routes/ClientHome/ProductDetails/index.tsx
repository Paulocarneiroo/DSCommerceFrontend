import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import HeaderClient from '../../../components/HeaderClient';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import { ProductDTO } from '../../../models/product';
import './styles.css';


const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "Esta TV é muito bonita",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 1,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 4,
            name: "Importados"
        }
    ]
}

const ProductDetails = () => {
    return (
        <>
            <>
                <main>
                    <section id="product-details-section" className="dsc-container">
                        <ProductDetailsCard product = {product} />
                        <div className="dsc-btn-page-container">
                            <ButtonPrimary text="Comprar"/>
                            <ButtonInverse text="Início"/>
                        </div>
                    </section>
                </main>
            </>
        </>
    )
}

export default ProductDetails