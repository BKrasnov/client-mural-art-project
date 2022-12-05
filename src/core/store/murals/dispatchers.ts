import { createAsyncThunk } from "@reduxjs/toolkit";

import { MuralService } from "@core/api/services/muralService";

/** @todo Added pagination params */
export const getMurals = createAsyncThunk("murals/murals", async (params: string, thunkApi) => {
  try {
    return await MuralService.getMural();
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(error);
  }
});
