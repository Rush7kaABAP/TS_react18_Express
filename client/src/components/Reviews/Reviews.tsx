import { Review } from '../Review/Review';
import { selectRestaurantReviewsById } from '../../store/modules/restaurant/selectors';
import { useEffect } from 'react';
import { selectIsReviewLoading } from '../../store/modules/review/selectors';
import { fetchReviewsByRestaurantId } from '../../store/modules/review/thunk/fetchReviewsByRestaurantId';
import { useParams } from 'react-router-dom';

import styles from './styles.module.css';

import { useAppDispatch, useAppSelector } from '../../store/model/storeModel';

export const Reviews = () => {
  const { restaurantId } = useParams();
  const dispatch = useAppDispatch();
  const reviewIds = useAppSelector((state) =>
    selectRestaurantReviewsById(state, { restaurantId })
  ) as Array<string>;
  const isLoading = useAppSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(fetchReviewsByRestaurantId(restaurantId));
  }, [restaurantId, dispatch]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h2>Reviews</h2>
      <div>
        {reviewIds.map((id) => (
          <Review key={id} reviewId={id} className={styles.review} />
        ))}
      </div>
    </div>
  );
};
