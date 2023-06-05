import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://647db155af984710854a24a5.mockapi.io/v1';

export const fetchFirstUsers = createAsyncThunk(
  'users/fetchFirst',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tweets?p=1&l=3');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMoreUsers = createAsyncThunk(
  'users/fetchMore',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/tweets?p=${page}&l=3`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const increaseFollowers = createAsyncThunk(
  'tweets/increaseFollowers',
  async ({ id, followers }, thunkAPI) => {
    try {
      const updatedFollowers = followers + 1;
      const response = await axios.put(`/tweets/${id}`, {
        followers: updatedFollowers,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const decreaseFollowers = createAsyncThunk(
  'tweets/decreaseFollowers',
  async ({ id, followers }, thunkAPI) => {
    try {
      const updatedFollowers = followers - 1;
      const response = await axios.put(`/tweets/${id}`, {
        followers: updatedFollowers,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
