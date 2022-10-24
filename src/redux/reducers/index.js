/* eslint-disable no-param-reassign */
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import podcasts from "./podcasts";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    podcasts,
  });

const rootReducer = (history) => (state, action) => {
  return createRootReducer(history)(state, action);
};

export default rootReducer;
