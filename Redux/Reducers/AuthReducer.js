import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { CheckUserCookiesApi, LogoutApi, signInApi, signUpApi } from "services/apis/User";

const initialState = { user: null, loading: true, error: null };

export const SignInUser = createAsyncThunk("user/SIGNIN", async (data, { rejectWithValue }) => {
  try {
    const response = await signInApi(data);
    return response;
  } catch (error) {
    return rejectWithValue(error?.response?.data?.message);
  }
});

export const SignUpUser = createAsyncThunk("user/SIGNUP", async (data, { rejectWithValue }) => {
  try {
    const response = await signUpApi(data);
    return response;
  } catch (error) {
    return rejectWithValue(error?.response?.data?.message);
  }
});

export const SignOut = createAsyncThunk("user/SIGNOUT", async (_, { rejectWithValue }) => {
  try {
    const response = await LogoutApi();
    return response;
  } catch (error) {
    return rejectWithValue(error?.response?.data?.message);
  }
});

export const checkCookies = createAsyncThunk("user/CHECK_COOKIES", async (_, { rejectWithValue }) => {
  try {
    const response = await CheckUserCookiesApi();
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const Slice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [SignInUser.pending]: (state, action) => {
      return { user: null, error: false, loading: true };
    },

    [SignInUser.fulfilled]: (state, action) => {
      toast.success("خوش آمدید");
      return { user: action.payload, error: false, loading: false };
    },

    [SignInUser.rejected]: (state, action) => {
      toast.error(action.payload);
      return { user: null, error: action.payload, loading: false };
    },

    [SignUpUser.pending]: (state, action) => {
      return { user: null, error: false, loading: true };
    },

    [SignUpUser.fulfilled]: (state, action) => {
      toast.success("خوش آمدید");
      return { user: action.payload, error: false, loading: false };
    },

    [SignUpUser.rejected]: (state, action) => {
      toast.error(action.payload);
      return { user: null, error: action.payload, loading: false };
    },

    [SignOut.fulfilled]: (state, action) => {
      window.location.href = "/";
      return { user: null, error: false, loading: true };
    },

    [checkCookies.pending]: (state, action) => {
      return { user: null, error: false, loading: true };
    },

    [checkCookies.fulfilled]: (state, action) => {
      return { user: action.payload, error: false, loading: false };
    },

    [checkCookies.rejected]: (state, action) => {
      return { user: null, error: action.payload, loading: false };
    },
  },
});

export const AuthReducer = Slice.reducer;
