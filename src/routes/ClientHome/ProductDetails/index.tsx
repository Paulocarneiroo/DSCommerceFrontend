import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import HeaderClient from '../../../components/HeaderClient';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import * as productService from '../../../services/product-service';
import './styles.css';

const ProductDetails = () => {

    const params = useParams();
    const product = productService.findById(Number(params.productId));

    return (
        <>
            <>
                <main>
                    <section id="product-details-section" className="dsc-container">
                        {
                            product &&
                            <ProductDetailsCard product={product} />
                        }
                        <div className="dsc-btn-page-container">
                            <ButtonPrimary text="Comprar" />
                            <Link to="/">
                                <ButtonInverse text="Início" />
                            </Link>

                        </div>
                    </section>
                </main>
            </>
        </>
    )
}

export default ProductDetails