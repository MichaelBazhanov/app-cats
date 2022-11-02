import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import rootReducer from "./rootReducers";

//Подключаем главную SAGA
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();

//redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const CreateAppStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default CreateAppStore;
