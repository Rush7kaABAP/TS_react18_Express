import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';

import styles from './styles.module.css';
import { useAppSelector } from '../../store/model/storeModel';

interface RLinkProps{
    restaurantId: string,
    className?: string
}

export const RestaurantLink: React.FC<RLinkProps>  = ({ restaurantId, className }) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  if (!restaurant) {
    return null;
  }

  return (
    <Link
      to={`/restaurants/${restaurantId}`}
      className={classNames(styles.root, className)}
    >
      {restaurant.name}
    </Link>
  );
};
