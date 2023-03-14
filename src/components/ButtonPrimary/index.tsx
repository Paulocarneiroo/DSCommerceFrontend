import './styles.css';

type Props = {
    text: string;
}


const ButtonPrimary = ({ text }: Props) => {
    return (
        <>
            <div className="dsc-btn dsc-btn-blue">
                {text}
            </div>
        </>

    )
}

export default ButtonPrimary;