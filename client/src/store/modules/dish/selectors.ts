import { entitySelectors } from '.';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { TRootState } from '../../model/storeModel';

export const selectDishModule = (state: TRootState) => state.dish;

export const selectDishEntities = (state: TRootState) => state.dish.entities;

export const selectDishById = (state: TRootState, { dishId }: any) =>
  entitySelectors.selectById(selectDishModule(state), dishId);

export const selectDishIds = (state: TRootState) =>
  entitySelectors.selectIds(selectDishModule(state));

export const selectDishLoadingStatus = (state: TRootState) =>
  selectDishModule(state).loadingStatus;

export const selectIsDishLoading = (state: TRootState) =>
  selectDishLoadingStatus(state) === LOADING_STATUSES.loading;

export const selectIsDishSuccessLoaded = (state: TRootState) =>
  selectDishLoadingStatus(state) === LOADING_STATUSES.success;
