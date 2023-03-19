import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { TRootState } from '../../model/storeModel';

export const selectReviewModule = (state: TRootState) => state.review;

export const selectReviewEntities = (state: TRootState) =>
  selectReviewModule(state).entities;

export const selectReviewById = (state: TRootState, { reviewId }: any) =>
  selectReviewModule(state).entities[reviewId];

export const selectReviewIds = (state: TRootState) => selectReviewModule(state).ids;

export const selectReviewLoadingStatus = (state: TRootState) =>
  selectReviewModule(state).loadingStatus;

export const selectIsReviewLoading = (state: TRootState) =>
  selectReviewLoadingStatus(state) === LOADING_STATUSES.loading;
