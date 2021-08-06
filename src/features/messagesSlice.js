import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  messagesArray: [],
  error: false,
  status: "idle",
  page: 1,
};

export const fetchMessagesAsync = createAsyncThunk(
  "messages/fetchMessages",
  async (page, { dispatch, getState }) => {
    const getData = getState();
    console.log(getData);
    const res = await axios.get(
      `https://gorest.co.in/public/v1/users?page=${page}`
    );
    const messages = res?.data?.data;
    // The value we return becomes the `fulfilled` action payload
    return messages;
  }
);

export const messageSlice = createSlice({
  name: "messages",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchMessagesAsync.pending, (state, action) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchMessagesAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.loading = false;
        // const sortedData = action.payload?.sort((a, b) => b.id - a.id);
        // state.messagesArray = sortedData;
        // const newData = [...action.payload, ...state.messagesArray];
        state.messagesArray = [...state.messagesArray, ...action.payload];
      })
      .addCase(fetchMessagesAsync.rejected, (state, action) => {
        state.status = "failed";
        state.loading = true;
      });
  },
});

// export const { fetchMore } = messageSlice.actions;

// export const messages = (state) => state.messages?.messagesArray;

export default messageSlice.reducer;
