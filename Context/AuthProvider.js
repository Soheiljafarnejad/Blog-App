import Router from "next/router";
import { createContext, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { CheckUserCookiesApi, LogoutApi, signInApi, signUpApi } from "services/apis/User";
import { useReducerAsync } from "use-reducer-async";

const AuthContext = createContext();
const AuthContextDispatch = createContext();

const initialState = { user: null, loading: true, error: null };

const AuthProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "PENDING":
        return { user: null, loading: true, error: null };
      case "SUCCESS":
        return { user: action.payload, loading: false, error: null };
      case "REJECT":
        return { user: null, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const asyncActionHandlers = {
    SIGNIN:
      ({ dispatch }) =>
      async (action) => {
        dispatch({ type: "PENDING" });
        await signInApi(action.payload)
          .then((res) => {
            dispatch({ type: "SUCCESS", payload: res });
            toast.success("خوش آمدید");
            Router.push("/");
          })
          .catch((err) => {
            dispatch({ type: "REJECT", payload: err?.response?.data?.message });
            toast.error(err?.response?.data?.message);
          });
      },

    SIGNUP:
      ({ dispatch }) =>
      async (action) => {
        dispatch({ type: "PENDING" });
        await signUpApi(action.payload)
          .then((res) => {
            dispatch({ type: "SUCCESS", payload: res });
            toast.success("خوش آمدید");
            Router.push("/");
          })
          .catch((err) => {
            dispatch({ type: "REJECT", payload: err?.response?.data?.message });
            toast.error(err?.response?.data?.message);
          });
      },

    SIGNOUT:
      ({ dispatch }) =>
      async (action) => {
        dispatch({ type: "PENDING" });
        await LogoutApi().then((res) => {
          window.location.href = "/";
        });
      },

    CHECKCOOKIES:
      ({ dispatch }) =>
      async (action) => {
        dispatch({ type: "PENDING" });
        await CheckUserCookiesApi()
          .then((res) => {
            dispatch({ type: "SUCCESS", payload: res });
          })
          .catch((err) => {});
      },
  };

  const [value, dispatch] = useReducerAsync(reducer, initialState, asyncActionHandlers);

  useEffect(() => {
    dispatch({ type: "CHECKCOOKIES" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={value}>
      <AuthContextDispatch.Provider value={dispatch}>{children}</AuthContextDispatch.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthContextDispatch);
