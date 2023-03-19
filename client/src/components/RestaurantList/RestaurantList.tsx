import React, { useEffect } from 'react';

import { selectRestaurantIdsFilteredByDishId } from '../../store/modules/restaurant/selectors';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';
import { RestaurantLink } from '../RestaurantLink/RestaurantLink';

import styles from './styles.module.css';

import { TRootState, useAppDispatch, useAppSelector } from '../../store/model/storeModel';

interface RListProps{
    dishId: string,
    className?: string
}

export const RestaurantList: React.FC<RListProps> = ({ dishId }) => {
  const dispatch = useAppDispatch();
  const restaurantIds = useAppSelector((state:TRootState) =>
    selectRestaurantIdsFilteredByDishId(state, { dishId })
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  });

  return (
    <div>
      <h3>Доступно в:</h3>
      {restaurantIds.map((restaurantId) => {
        const rstId = restaurantId as string;
        return (
        <RestaurantLink
          key={rstId}
          restaurantId={rstId}
          className={styles.restaurant}
        />)
      }

      )}
    </div>
  );
};
