import { CaseReducer, createSlice } from "@reduxjs/toolkit";

import { userUpdate } from "./dispatchers";
import { UserState, initialState } from "./state";

const pendingReducer: CaseReducer<UserState> = state => {
  state.isLoading = true;
};

const fulfilledUserReducer: CaseReducer<UserState> = (state, action) => {
  state.updatedUser = action.payload;
  state.isLoading = false;
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(userUpdate.pending, pendingReducer)
      .addCase(userUpdate.fulfilled, fulfilledUserReducer)
      .addCase(userUpdate.rejected, state => {
        state.isLoading = false;
      }),
});

export default userSlice.reducer;
