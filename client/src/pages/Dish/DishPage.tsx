import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Dish } from '../../components/Dish/Dish';
import { RestaurantList } from '../../components/RestaurantList/RestaurantList';
import { fetchDishById } from '../../store/modules/dish/thunk/fetchDishById';

import styles from './styles.module.css';

import { useAppDispatch } from '../../store/model/storeModel';

interface DishPageProps{
}


export const DishPage: React.FC<DishPageProps> = () => {
  const { dishId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDishById(dishId));
  }, [dishId,dispatch]);
  if (dishId === undefined) {
    return null;
  }
  return (
        <div className={styles.root}>
          <Dish dishId={dishId} className={styles.dish} />
          <RestaurantList dishId={dishId} />
        </div>
      );

};
