import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { items: [], loading: "start" };

export const loadMenu = createAsyncThunk("menu/getMenu", async () => {
  return axios.get("http://localhost:1337/api/foods?populate=*").then((r) => r.data);
});

export const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMenu.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.items.length = 0;
      state.items.push(...action.payload.data);
    });
    builder.addCase(loadMenu.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(loadMenu.rejected, (state, action) => {
      state.loading = "rejected";
    });
  },
});

// Action creators are generated for each case reducer function
// export const {  } =
//   cartSlice.actions;

export default menuSlice.reducer;
