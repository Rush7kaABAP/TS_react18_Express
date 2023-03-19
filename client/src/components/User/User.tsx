import {
  selectIsUserLoading,
  selectUserById,
} from '../../store/modules/user/selectors';

import styles from './styles.module.css';

import { useAppSelector } from '../../store/model/storeModel';

interface UserProps{
    userId: string,
    className?: string
}

export const User: React.FC<UserProps> = ({ userId }) => {
  const user = useAppSelector((state) => selectUserById(state, { userId }));

  const isLoading = useAppSelector(selectIsUserLoading);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!user) {
    return null;
  }

  return <div className={styles.root}>{user.name}</div>;
};