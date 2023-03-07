import './styles.css';

type Props = {
    name: string;
}

const ProductCategory = ({ name }: Props) => {
    return (
        <div className="dsc-category">
            {name}
        </div>
    )
}

export default ProductCategory;