import styles from './styles.module.css';
import { Rating } from '../Rating/Rating';
import { Size } from '../../constants/ui';
import { selectReviewById } from '../../store/modules/review/selectors';
import { User } from '../User/User';
import classNames from 'classnames';

import { useAppSelector } from '../../store/model/storeModel';

interface ReviewProps{
    reviewId: string,
    className?: string
}

export const Review: React.FC<ReviewProps>  = ({ reviewId, className }) => {
  const review = useAppSelector((state) => selectReviewById(state, { reviewId }));

  if (!review) {
    return null;
  }

  const { text, rating, userId } = review;

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.header}>
        <User userId={userId} />
        <Rating value={rating} size={Size.s} />
      </div>
      <div>{text}</div>
    </div>
  );
};
