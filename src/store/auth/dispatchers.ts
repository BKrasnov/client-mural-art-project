import { createAsyncThunk } from "@reduxjs/toolkit";

import { AuthService, UserService } from "@api/services";

import { Login, Registration } from "@core/models";

export const authLogin = createAsyncThunk("auth/login", async (loginData: Login, thunkApi) => {
  try {
    return await AuthService.login(loginData);
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(error);
  }
});

export const authRegister = createAsyncThunk("auth/register", async (registerData: Registration, thunkApi) => {
  try {
    return await AuthService.register(registerData);
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(error);
  }
});

export const authLogout = createAsyncThunk("auth/logout", async () => {
  try {
    return await UserService.logout();
  } catch (error: unknown) {
    throw error;
  }
});

export const getUserFromCache = createAsyncThunk("auth/subscribeToAuthStatus", async () => UserService.getUserFromCache());
