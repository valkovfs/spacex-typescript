import {createSlice } from '@reduxjs/toolkit';

export const initialState = {
    loading: false,
    hasErrors: false,
    launches: [],
}

export const launchesSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {
        getLaunches: (state) => {
            state.loading = true;
            state.hasErrors = false;
        },
        getLaunchesSuccess: (state, action) => {
            state.loading = false;
            state.hasErrors = false;
            state.launches = action.payload;
        },
        getLaunchesFailure: (state) => {
            state.loading = false;
            state.hasErrors = true;
        }
    }
})

export const { getLaunches, getLaunchesSuccess, getLaunchesFailure } = launchesSlice.actions;

export const selectLaunches = (state: { launches: any; }) => state.launches;

export const fetchLaunches = (value: number) => async (dispatch: any) => {
    dispatch(getLaunches());
    try {
        const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=${value}`);
        const data = await response.json();
        dispatch(getLaunchesSuccess(data));
    } catch (error) {
        dispatch(getLaunchesFailure());
    }
}