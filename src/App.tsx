import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from './hooks/redux';
import {useState, useEffect} from 'react';
import {fetchLaunches, selectLaunches} from "./redux/features/launches/launches.slice";
import {LaunchInfo} from "./models/models";
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {
    const dispatch = useAppDispatch();
    const {launches} = useAppSelector(selectLaunches)
    const [launchesData, setLaunchesData] = useState<any>([]);
    const [offset, setOffset] = useState(20);

    useEffect(() => {
        dispatch(fetchLaunches(offset));
    }, [offset]);

    return (
        <div className="App">
            <InfiniteScroll dataLength={launches.length} next={() => {
                setOffset(offset + 5);
                dispatch(fetchLaunches(offset));
            }
            } hasMore={true} loader={<h4>Loading...</h4>}>
                {launches.map((launch: LaunchInfo) => (
                    <div>
                        <h1>{launch.mission_name} {launch.flight_number}</h1>
                    </div>
                ))}
            </InfiniteScroll>



        </div>
    );
}

export default App;
