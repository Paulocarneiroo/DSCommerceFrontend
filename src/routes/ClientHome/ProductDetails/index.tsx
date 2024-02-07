import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import HeaderClient from '../../../components/HeaderClient';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import * as productService from '../../../services/product-service';
import './styles.css';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import axios from 'axios';
import { addProduct } from '../../../services/cart-service';
import * as cartService from '../../../services/cart-service';


const ProductDetails = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState<ProductDTO>();

    useEffect(() => {
        productService.findById(Number(params.productId))
            .then(response => {
                setProduct(response.data);
            }).catch(() => {
                navigate("/");
            })


        //const prod = productService.findById(Number(params.productId));
        //setProduct(prod);
    }, []);

    function handleBuyClick(){
        if(product){
            cartService.addProduct(product);
            navigate("/cart");
        }
    }

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
                            <div onClick={handleBuyClick}>
                                <ButtonPrimary text="Comprar" />
                            </div>
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