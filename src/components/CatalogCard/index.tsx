//Analise esse componente e procure inconsistencias
import './styles.css';
import computerImg from '../../assets/computer.png';

const CatalogCard = () => {
    return (
        <div className="dsc-card">
            <div className="dsc-catalog-card-top dsc-line-bottom">
                <img src={computerImg} alt="Computer" />
            </div>
            <div className="dsc-catalog-card-bottom">
                <h3>R$ 5000,00</h3>
                <h4>
                    Computador Gamer XT com suporte e 16GB de memória e processador
                    turbo plus
                </h4>
            </div>
        </div>
    )
}

export default CatalogCard;