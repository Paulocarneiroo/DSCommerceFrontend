import './styles.css';

type Props = {
  text: string;
};

export default function ButtonPrimaryAdmin({ text }: Props) {
  return <div className="dsc-btn dsc-btn-primary-admin">{text}</div>;
}