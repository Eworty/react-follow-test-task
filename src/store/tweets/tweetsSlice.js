import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initTweets } from '../initial';
import {
  fetchFirstUsers,
  fetchMoreUsers,
  increaseFollowers,
  decreaseFollowers,
} from './tweetsOperations';
import {
  handleFirstFetch,
  handleFetchMore,
  fetchThunksStatuses,
  handleFetchPending,
  handleFetchSuccess,
  handleFetchError,
  handleFollow,
  handleUnfollow,
  updateThunksStatuses,
  handleUpdatePending,
  handleUpdateSuccess,
  handleUpdateError,
} from './tweetsHandlers';
import { STATUS } from 'common/constants';

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: initTweets,
  extraReducers: builder => {
    builder
      .addCase(fetchFirstUsers.fulfilled, handleFirstFetch)
      .addCase(fetchMoreUsers.fulfilled, handleFetchMore)
      .addCase(increaseFollowers.fulfilled, handleFollow)
      .addCase(decreaseFollowers.fulfilled, handleUnfollow)
      .addMatcher(
        isAnyOf(...fetchThunksStatuses(STATUS.PENDING)),
        handleFetchPending
      )
      .addMatcher(
        isAnyOf(...fetchThunksStatuses(STATUS.FULFILLED)),
        handleFetchSuccess
      )
      .addMatcher(
        isAnyOf(...fetchThunksStatuses(STATUS.REJECTED)),
        handleFetchError
      )
      .addMatcher(
        isAnyOf(...updateThunksStatuses(STATUS.PENDING)),
        handleUpdatePending
      )
      .addMatcher(
        isAnyOf(...updateThunksStatuses(STATUS.FULFILLED)),
        handleUpdateSuccess
      )
      .addMatcher(
        isAnyOf(...updateThunksStatuses(STATUS.REJECTED)),
        handleUpdateError
      );
  },
});

export const tweetsReducer = tweetsSlice.reducer;
