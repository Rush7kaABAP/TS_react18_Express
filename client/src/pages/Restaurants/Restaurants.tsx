import { Tabs } from '../../components/Tabs/Tabs';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import React, { useState, useEffect } from 'react';
import { selectIsRestaurantLoading } from '../../store/modules/restaurant/selectors';
import { fetchRestaurants } from '../../store/modules/restaurant/thunk/fetchRestaurants';
import { fetchUsers } from '../../store/modules/user/thunk/fetchUsers';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.css';

import { useAppSelector, useAppDispatch } from '../../store/model/storeModel';

export const RestaurantsPage = () => {
  const dispatch = useAppDispatch();
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const isLoading = useAppSelector(selectIsRestaurantLoading);

  useEffect(() => {
    dispatch(fetchRestaurants());
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className={styles.root}>
      <Tabs onTabClick={setActiveRestaurantId} activeId={activeRestaurantId} />
      <div className={styles.restaurant}>
        <Outlet />
      </div>
    </div>
  );
};
