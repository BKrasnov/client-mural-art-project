import { createAsyncThunk } from "@reduxjs/toolkit";

import { MuralService } from "@core/api/services/muralService";

export const getMurals = createAsyncThunk("murals/murals", async (_, thunkApi) => {
  try {
    return await MuralService.getMural();
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(error);
  }
});
