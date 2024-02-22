import { useContext } from "react";
import cartIcon from "../../assets/cart.svg";
import './styles.css';
import { ContextCartCount } from "../../utils/context-cart";

const CartIcon = () => {
    const {contextCartCount} = useContext(ContextCartCount);

    return (
        <>
            <img src={cartIcon} alt="Carrinho de compras" />
            {
                contextCartCount > 0 && 
                <div className="dsc-cart-count">{contextCartCount}</div>
            }
            
        </>
    );
}

export default CartIcon;