import { Button } from '../Button/Button';
import classnames from 'classnames';

import styles from './styles.module.css';
import { addDish, removeDish } from '../../store/modules/cart/actions';
import { selectDishCountByName } from '../../store/modules/cart/selectors';
import { selectDishById } from '../../store/modules/dish/selectors';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store/model/storeModel';

interface DishProps{
    dishId: string,
    route?: string,
    className?: string
}

export const Dish: React.FC<DishProps> = ({ dishId, route, className }) => {
  const dish = useAppSelector((state) => selectDishById(state, { dishId }));
  const count = useAppSelector((state) =>
    selectDishCountByName(state, { dishId })
  );
  const dispatch = useAppDispatch();

  if (!dish) {
    return null;
  }

  const decrement = () => dispatch(removeDish(dishId));
  const increment = () => dispatch(addDish(dishId));

  const { name, ingredients } = dish;

  return (
    <div
      className={classnames(styles.root, className, {
        [styles.rootBig]: count > 4,
      })}
    >
      <div>
        {route ? (
          <Link to={route} className={classnames(styles.name, styles.link)}>
            {name}
          </Link>
        ) : (
          <span className={styles.name}>{name}</span>
        )}
        <div>{ingredients?.join(', ')}</div>
      </div>
      <div>
        <Button onClick={decrement}>-</Button>
        <span className={styles.count}>{count}</span>
        <Button onClick={increment}>+</Button>
      </div>
    </div>
  );
};
