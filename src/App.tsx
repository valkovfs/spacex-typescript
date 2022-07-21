import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from './hooks/redux';
import {useEffect} from 'react';
import {fetchLaunches, selectLaunches} from "./redux/features/launches/launches.slice";
import {LaunchInfo} from "./models/models";


const App = () => {
    const dispatch = useAppDispatch();
    const {launches} = useAppSelector(selectLaunches)
    useEffect(() => {
        dispatch(fetchLaunches());
    }, [dispatch]);
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                    {launches.map((launch: LaunchInfo) => <div>{launch.flight_number}, {launch.mission_name}</div>)}
                </p>
            </header>
        </div>
    );
}

export default App;
