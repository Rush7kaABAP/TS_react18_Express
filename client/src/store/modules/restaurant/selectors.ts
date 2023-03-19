import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import {
  selectDishEntities,
  selectIsDishSuccessLoaded,
} from '../dish/selectors';
import { compareDishesByName } from '../dish/utils/compareByName';
import { createSelector } from 'reselect';
import { selectReviewEntities } from '../review/selectors';
import { TRootState } from '../../model/storeModel';

export const selectRestaurantModule = (state: TRootState) => state.restaurant;

export const selectRestaurantById = (state: TRootState, { restaurantId }:any) =>
  selectRestaurantModule(state).entities[restaurantId];

export const selectRestaurantMenuById = (state: TRootState, { restaurantId }: any) =>
  selectRestaurantById(state, { restaurantId })?.menu;

export const selectRestaurantMenuByIdSortedByDishName = (
  state: TRootState,
  { restaurantId, sortDirection }: any // {restaurantId:string, sortDirection: string}
) => {
  const dishIds = selectRestaurantById(state, { restaurantId })?.menu;
  const dishEntities = selectDishEntities(state);
  const isDishLoaded = selectIsDishSuccessLoaded(state);

  if (!isDishLoaded) {
    return [];
  }

  if (dishIds === undefined) {
    return [];
  }
  return dishIds
    .map((id: any) => dishEntities[id])
    .sort((a: any, b: any) => compareDishesByName(a, b, sortDirection))
    .map((dish: any) => dish?.id);
};

export const selectRestaurantReviewsById = (state: TRootState, { restaurantId }: any) =>
  selectRestaurantById(state, { restaurantId })?.reviews;

export const selectRestaurantIds = (state: TRootState) => selectRestaurantModule(state).ids;
export const selectRestaurantIdsFilteredByName = (state: TRootState, { restaurantName }: any) =>
  Object.values(selectRestaurantModule(state).entities).reduce(
    (acc, { id, name }: any) => {
      if (name.toLowerCase().includes(restaurantName.toLowerCase())) {
        const lId = id as never;
        acc.push(lId);
      }
      return acc;
    },
    []
  );

export const selectRestaurantLoadingStatus = (state: TRootState) =>
  selectRestaurantModule(state).loadingStatus;

export const selectIsRestaurantLoading = (state: TRootState) =>
  selectRestaurantLoadingStatus(state) === LOADING_STATUSES.loading;

export const createSelectRestaurantRating = () =>
  createSelector(
    [selectRestaurantReviewsById, selectReviewEntities],
    (restaurantReviewIds, reviewEntities) => {
      if (!Object.keys(reviewEntities)?.length) {
        return 0;
      }

      if ( restaurantReviewIds === undefined ){
        return 0;
      }
      return Math.round(
        restaurantReviewIds.reduce(
          (sum: any, reviewId: any) => sum + reviewEntities[reviewId]?.rating || 0,
          0
        ) / restaurantReviewIds.length
      );
    }
  );

export const selectRestaurantIdsFilteredByDishId = (state: TRootState, { dishId }: any) =>
  selectRestaurantIds(state).filter((restaurantId) => {
    const restaurant = selectRestaurantById(state, { restaurantId });

    return !!restaurant?.menu.includes(dishId);
  });
