import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { Rating } from '../../components/Rating/Rating';
import { Size } from '../../constants/ui';
import { createSelectRestaurantRating } from '../../store/modules/restaurant/selectors';
import { selectIsReviewLoading } from '../../store/modules/review/selectors';
import { fetchReviewsByRestaurantId } from '../../store/modules/review/thunk/fetchReviewsByRestaurantId';

import { TRootState, useAppDispatch, useAppSelector } from '../../store/model/storeModel';

interface RestaurantRatingProps{
    restaurantId:string, 
    className:string
}

export const RestaurantRating: React.FC<RestaurantRatingProps> = 
    ({ restaurantId, className } ) => {
  const dispatch = useAppDispatch();
  const selectRestaurantRating = useCallback(
    createSelectRestaurantRating(),
    []
  );

  const rating = useAppSelector((state: TRootState) =>
    selectRestaurantRating(state, { restaurantId })
  );
  const isLoading = useAppSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch( fetchReviewsByRestaurantId( restaurantId ) );
  }, [dispatch, restaurantId]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <Rating value={rating} size={Size.l} className={className} />;
};

export const RestaurantRatingWithMemo = React.memo(RestaurantRating);
