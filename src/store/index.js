/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension"; // extension de Redux del navegador
import promiseMiddleware from "redux-promise"; // trata las promesas del redux asincronamente
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "../redux/reducers";
import mySaga from "../redux/sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  const middleware = [promiseMiddleware, thunk, sagaMiddleware];

  // create the saga middleware

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        ...middleware
      )
    )
  );

  // then run the saga
  sagaMiddleware.run(mySaga);

  return store;
}
