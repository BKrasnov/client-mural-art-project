import { createSlice } from "@reduxjs/toolkit";

import { getMuralById } from "./dispatchers";
import { entityAdapter, initialState, State } from "./state";

const muralDetailsSlice = createSlice({
  name: "mural",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getMuralById.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(getMuralById.fulfilled, (state, action) => {
        if (action.payload !== null) {
          entityAdapter.setOne(state as State, action.payload);
        }
        state.isLoading = false;
      })
      .addCase(getMuralById.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      }),
});

export default muralDetailsSlice.reducer;
