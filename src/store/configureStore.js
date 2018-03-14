import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";

export default function configureStore(initialState) {
  console.log("nti", initialState);
  return createStore(rootReducer, initialState);
}
