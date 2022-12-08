import { MuralService } from "@api/services/muralService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMuralById = createAsyncThunk("murals/muralById", async (id: number, thunkApi) => {
    try {
      return await MuralService.getMuralById(id);
    } catch (error: unknown) {
      return thunkApi.rejectWithValue(error);
    }
  });