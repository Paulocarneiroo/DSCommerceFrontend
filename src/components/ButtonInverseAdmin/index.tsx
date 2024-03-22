import './styles.css';

type Props = {
  text: string;
};

export default function ButtonInverseAdmin({ text }: Props) {
  return <div className="dsc-btn dsc-btn-inverse-admin">{text}</div>;
}