import { Tab } from '../Tab/Tab';

import styles from './styles.module.css';
import { selectRestaurantIdsFilteredByName } from '../../store/modules/restaurant/selectors';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../store/model/storeModel';

interface TabsProps{
  onTabClick?: any,
  activeId?: any
}


export const Tabs: React.FC<TabsProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const restaurantIds = useAppSelector((state) =>
    selectRestaurantIdsFilteredByName(state, {
      restaurantName: searchParams.get('restaurantName') || '',
    })
  );

  return (
    <div className={styles.root}>
      <input
        value={searchParams.get('restaurantName') || ''}
        onChange={(event) =>
          setSearchParams({ restaurantName: event.target.value || '' })
        }
        className={styles.searchInput}
        placeholder="Search..."
      />
      <div>
        {restaurantIds.map((id) => (
          <Tab key={id} restaurantId={id} className={styles.tab} />
        ))}
      </div>
    </div>
  );
};
