import { createAsyncThunk } from "@reduxjs/toolkit";

import { MuralService } from "@api/services/muralService";
import { MuralsQueryOptions } from "@core/models";

/**
 * Getting all murals.
 * @param options Options for fetching murals.
 */
export const getNextPageOfMurals = createAsyncThunk("murals/murals", async (options: MuralsQueryOptions, thunkApi) => {
  try {
    return await MuralService.getMurals(options);
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(error);
  }
});
