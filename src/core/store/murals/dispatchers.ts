import { createAsyncThunk } from "@reduxjs/toolkit";

import { MuralService } from "@core/api/services/muralService";
import { MuralsFetchingOptions } from "@core/models/murals";

/**
 * Getting all murals.
 * @param options Options for fetching murals.
 */
export const getMurals = createAsyncThunk("murals/murals", async (options: MuralsFetchingOptions, thunkApi) => {
  try {
    return await MuralService.getMurals(options);
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(error);
  }
});
