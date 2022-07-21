import { configureStore } from '@reduxjs/toolkit';
import { launchesSlice } from './features/launches/launches.slice';

export const store = configureStore({
    reducer: { launches: launchesSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;