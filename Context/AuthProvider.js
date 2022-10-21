import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const AuthContextDispatch = createContext();

const initialState = { user: null, loading: true, error: false };

const AuthProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "": {
        return;
      }
      default:
        return state;
    }
  };

  const [value, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={value}>
      <AuthContextDispatch.Provider value={dispatch}>{children}</AuthContextDispatch.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthDispatch = () => useContext(AuthContextDispatch);
