import { Banner } from '@store/shared/ui';
import { Link } from 'react-router-dom';
import styles from './cart.module.css';

/* eslint-disable-next-line */
export interface RoutesCartProps {}

export function RoutesCart(props: RoutesCartProps) {
  return (
    <div className={styles['container']}>
      <h1>Shopping Cart</h1>
      <Banner text="Welcome to the cart." />
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default RoutesCart;
