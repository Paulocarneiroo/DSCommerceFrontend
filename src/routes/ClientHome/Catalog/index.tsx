import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalogCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import './styles.css';
import * as productService from '../../../services/product-service';
import { ProductDTO } from '../../../models/product';
import { useEffect, useState } from 'react';

const Catalog = () => {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        productService.findAll()
            .then(response => {
                //console.log(response.data.content);
                setProducts(response.data.content);
            });
    }, []);

    return (
        <>
            <main>
                <section id="catalog-section" className="dsc-container">
                    <SearchBar />
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        {
                            products.map(
                                product => <CatalogCard key={product.id} product = {product}/>
                            )
                        }
                    </div>
                    <ButtonNextPage />
                </section>
            </main>
        </>
    )
}

export default Catalog