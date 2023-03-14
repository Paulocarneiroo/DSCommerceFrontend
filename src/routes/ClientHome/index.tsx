import { Outlet } from 'react-router-dom';
import HeaderClient from '../../components/HeaderClient';
import './styles.css';

const ClientHome = () => {
  return (
    <>
    <HeaderClient/>
    <Outlet/>
    </>
  )
}

export default ClientHome