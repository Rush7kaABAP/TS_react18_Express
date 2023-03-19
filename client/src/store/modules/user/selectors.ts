import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { TRootState } from '../../model/storeModel';

export const selectUserModule = (state: TRootState)=> state.user;

export const selectUserById = (state: TRootState, { userId }:any) =>
  selectUserModule(state).entities[userId];

export const selectUserIds = (state: TRootState) => selectUserModule(state).ids;

export const selectUserLoadingStatus = (state: TRootState) =>
  selectUserModule(state).loadingStatus;

export const selectIsUserLoading = (state: TRootState) =>
  selectUserLoadingStatus(state) === LOADING_STATUSES.loading;
