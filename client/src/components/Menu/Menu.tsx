import { Dish } from '../Dish/Dish';
import { selectRestaurantMenuByIdSortedByDishName } from '../../store/modules/restaurant/selectors';
import { useEffect } from 'react';
import { selectIsDishLoading } from '../../store/modules/dish/selectors';
import { fetchDishByRestaurantId } from '../../store/modules/dish/thunk/fetchDishByRestaurantId';
import { Button } from '../Button/Button';
import { useParams, useSearchParams } from 'react-router-dom';
import { getAlternativeSort } from './utils';
import { sortDirections } from '../../constants/sortDirections';
import { withAuthorization } from '../../hocs/withAuthorization/withAuthorization';
import { useAppDispatch, useAppSelector } from '../../store/model/storeModel';

import styles from './styles.module.css';

const sortSearchParamName = 'sort';
const defaultSort = { [sortSearchParamName]: sortDirections.asc };

interface MenuProps{
}

export const Menu: React.FC<MenuProps> = () => {
  const { restaurantId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams(defaultSort);
  const dispatch = useAppDispatch();
  const currentSort = searchParams.get(sortSearchParamName);

  const dishIds = useAppSelector((state) =>
    selectRestaurantMenuByIdSortedByDishName(state, {
      restaurantId,
      sortDirection: currentSort,
    })
  );
  const isLoading = useAppSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(fetchDishByRestaurantId(restaurantId));
  }, [restaurantId,dispatch]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <div className={styles.header}>
        <h2>Menu</h2>
        <Button
          className={styles.sortButton}
          onClick={() => {
            const lclSort = currentSort as string;
            setSearchParams({
              sort: getAlternativeSort(lclSort),
            });
          }}
        >
          {currentSort}
        </Button>
      </div>

      <div>
        {dishIds.map((id) => (
          <Dish key={id} dishId={id} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};

export const MenuWithAuthorizedCheck = withAuthorization(Menu);
