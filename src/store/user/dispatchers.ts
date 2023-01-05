import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserService } from "@api/services";

import { Profile } from "@core/models";

export const userUpdate = createAsyncThunk("user/update", async (profile: Profile, thunkApi) => {
  try {
    return await UserService.updateUser(profile);
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(error);
  }
});