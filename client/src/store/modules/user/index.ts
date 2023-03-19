import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { LOADING_STATUSES } from '../../constants/loadingStatuses';
import { TUser } from '../../model/backendModel';
import { fetchUsers } from './thunk/fetchUsers';

const userEntityAdapter = createEntityAdapter<TUser>({selectId: (user) => user.id});

export const userSlice = createSlice({
  name: 'user',
  initialState: userEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUSES.idle,
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loadingStatus = LOADING_STATUSES.loading;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        userEntityAdapter.setAll(state, payload);
        state.loadingStatus = LOADING_STATUSES.success;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.loadingStatus =
          payload === LOADING_STATUSES.earlyAdded
            ? LOADING_STATUSES.success
            : LOADING_STATUSES.failed;
      }),
});
// type TUserAdapter = typeof userEntityAdapter;

// export type TUserState = {
//     ids:Array<string>,
//     entities: {[key: string]: TUser},
//     loadingStatus: string
//   };
// const initialState = userEntityAdapter.getInitialState({
//     loadingStatus: LOADING_STATUSES.idle,
//   });

// export const  userSlice = createSlice({
//       name:'user', 
//       initialState: initialState,
//       reducers: {},
//   extraReducers: (builder) =>
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loadingStatus = LOADING_STATUSES.loading;
//       })
//       .addCase(fetchUsers.fulfilled, (state, { payload }) => {
//         userEntityAdapter.setAll(state, payload);
//         state.loadingStatus = LOADING_STATUSES.success;
//       })
//       .addCase(fetchUsers.rejected, (state, { payload }) => {
//         state.loadingStatus =
//           payload === LOADING_STATUSES.earlyAdded
//             ? LOADING_STATUSES.success
//             : LOADING_STATUSES.failed;
//       }),
//  });
