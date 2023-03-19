import React from 'react';
import { Button, StyledButton } from '../../components/Button/Button';
import { Dish } from '../../components/Dish/Dish';
import { clearCart } from '../../store/modules/cart/actions';
import { selectCartDishIds } from '../../store/modules/cart/selectors';

import styles from './styles.module.css';

import { useAppDispatch, useAppSelector } from '../../store/model/storeModel';

interface CartProps{
}

export const Cart: React.FC<CartProps> = () => {
  const dishIds = useAppSelector(selectCartDishIds);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2>Cart</h2>
        <StyledButton onClick={() => dispatch(clearCart())}
          className={styles.clearButton}
          bgColor='black'>
          Clear
        </StyledButton>
        {/* <Button
          onClick={() => dispatch(clearCart())}
          className={styles.clearButton}
        >
          Clear
        </Button> */}
      </div>
      {dishIds.length > 0 ? (
        <div>
          {dishIds.map((dishId) => (
            <Dish key={dishId} dishId={dishId} className={styles.dish} />
          ))}
        </div>
      ) : (
        <span>Empty</span>
      )}
    </div>
  );
};
