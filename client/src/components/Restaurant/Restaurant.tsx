import {
  selectRestaurantById
} from '../../store/modules/restaurant/selectors';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { RestaurantRating } from '../../containers/RestaurantRating/RestaurantRating';
import classNames from 'classnames';

import styles from './styles.module.css';
import { TRootState } from '../../store/model/storeModel';
import { useAppSelector } from '../../store/model/storeModel';

const tabs = ['menu', 'reviews'];

interface RestaurantProps{
}

export const Restaurant: React.FC<RestaurantProps> = () => {
  const { restaurantId } = useParams();
  const locRestaurantId = restaurantId as string;
  const restaurant = useAppSelector((state: TRootState) =>
    selectRestaurantById(state, { restaurantId })
  );

  if (!restaurant) {
    return null;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <RestaurantRating restaurantId={locRestaurantId} className={styles.rating} />
      <div>
        {tabs.map((tab) => (
          <NavLink
            key={tab}
            to={tab}
            className={({ isActive }) =>
              classNames(styles.tab, { [styles.active]: isActive })
            }
          >
            {tab}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
