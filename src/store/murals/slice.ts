import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MuralFilters } from "@core/models/murals";

import { getMurals } from "./dispatchers";
import { initialState } from "./state";

const muralsSlice = createSlice({
  name: "mural",
  initialState,
  reducers: {
    setMuralsFilters: (state, action: PayloadAction<MuralFilters>) => {
      state.muralsListFilters = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getMurals.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMurals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.murals = action.payload;
      })
      .addCase(getMurals.rejected, (state, action) => {
        state.isLoading = false;
        state.muralsListError = action.error.message;
      }),
});

export default muralsSlice.reducer;

export const { setMuralsFilters } = muralsSlice.actions;
