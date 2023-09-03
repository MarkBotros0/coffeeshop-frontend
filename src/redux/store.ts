import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import menuReducer from './menuSlice'

export const store = configureStore({
  reducer: {
    menu : menuReducer,
    order: orderReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
