import {
  PayloadAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { timetableReducer } from "./timetable";

const appReducers = combineReducers({
  [timetableReducer.name]: timetableReducer.reducer,
});

const rootReducers = (state: any, action: PayloadAction) => {
  return appReducers(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["timetable.selectedDay"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
