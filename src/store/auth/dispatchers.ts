import { createAsyncThunk } from "@reduxjs/toolkit";

import { AuthService, UserService } from "@api/services";

import { Login, Profile, Registration } from "@core/models";

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
    return await AuthService.logout();
  } catch (error: unknown) {
    throw error;
  }
});

export const authProfile = createAsyncThunk("auth/updateProfile", async (profile: Profile, thunkApi) => {
  try {
    return await UserService.updateUser(profile);
  } catch (error: unknown) {
    return thunkApi.rejectWithValue(error);
  }
});

export const getUserFromCache = createAsyncThunk("auth/subscribeToAuthStatus", async () => UserService.getUserFromCache());
