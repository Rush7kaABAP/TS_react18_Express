import { Size } from '../../constants/ui';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import styles from './styles.module.css';

import { useAppSelector } from '../../store/model/storeModel';

interface TabProps{
    restaurantId: string,
    className?: string
}

export const Tab: React.FC<TabProps> = ({ restaurantId, className }) => {
  const restaurant = useAppSelector((state) =>
    selectRestaurantById(state, { restaurantId })
  );

  if (!restaurant) {
    return null;
  }

  return (
    <NavLink
      to={`${restaurantId}`}
    //   size={Size.l}
      className={({ isActive }) =>
        classnames(styles.root, className, {
          [styles.isActive]: isActive,
          size: Size.l
        })
      }
    >
      {restaurant.name}
    </NavLink>
  );
};
