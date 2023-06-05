import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tweetsReducer } from './tweets/tweetsSlice';
import { filterReducer } from './filter/filterSlice';

const tweetsPersistConfig = {
  key: 'followings',
  storage,
  whitelist: ['followings'],
};

const persistedTweetsReducer = persistReducer(
  tweetsPersistConfig,
  tweetsReducer
);

export const store = configureStore({
  reducer: {
    tweets: persistedTweetsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
