import React from 'react';
import { useEffect } from 'react';
import { Dish } from '../../components/Dish/Dish';
import { GET_ROUTES } from '../../routes/constants';
import { selectDishIds } from '../../store/modules/dish/selectors';
import { fetchDishes } from '../../store/modules/dish/thunk/fetchDishes';

import styles from './styles.module.css';

import { useAppSelector, useAppDispatch } from '../../store/model/storeModel';

interface DishesPageProps{
}

export const DishesPage: React.FC<DishesPageProps> = () => {
  const dishIds = useAppSelector((state) => selectDishIds(state));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  return (
    <div className={styles.root}>
      <h2>Dishes</h2>
      {dishIds.map((dishId) => {
        const locDId = dishId as string;
        return (
            <Dish
            key={dishId}
            dishId={locDId}
            route={GET_ROUTES.getDishRoute(locDId)}
            className={styles.dish}
            />)
        })
        }
    </div>
  );
};
