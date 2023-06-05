import {
  fetchFirstUsers,
  fetchMoreUsers,
  increaseFollowers,
  decreaseFollowers,
} from './tweetsOperations';

const fetchThunks = [fetchFirstUsers, fetchMoreUsers];
export const fetchThunksStatuses = status =>
  fetchThunks.map(thunk => thunk[status]);

export const handleFirstFetch = (state, { payload }) => {
  state.users = payload;
  state.page = 2;
};

export const handleFetchMore = (state, { payload }) => {
  state.users.push(...payload);
  state.page += 1;
};

export const handleFetchPending = state => {
  state.isLoading = true;
};

export const handleFetchSuccess = state => {
  state.isLoading = false;
  state.error = false;
};

export const handleFetchError = state => {
  state.isLoading = false;
  state.error = true;
};

const updateThunks = [increaseFollowers, decreaseFollowers];
export const updateThunksStatuses = status =>
  updateThunks.map(thunk => thunk[status]);

export const handleFollow = (state, { payload }) => {
  const index = state.users.findIndex(user => user.id === payload.id);
  state.users[index].followers += 1;

  state.followings.push(payload.id);
};

export const handleUnfollow = (state, { payload }) => {
  const index = state.users.findIndex(user => user.id === payload.id);
  state.users[index].followers -= 1;

  state.followings = state.followings.filter(el => el !== payload.id);
};

export const handleUpdatePending = (state, { meta }) => {
  state.isUpdating = { status: true, id: meta.arg.id };
};

export const handleUpdateSuccess = state => {
  state.isUpdating = { status: false, id: null };
  state.error = false;
};

export const handleUpdateError = state => {
  state.isUpdating = { status: false, id: null };
  state.error = true;
};
