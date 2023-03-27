import { PageBuilder } from 'modules/PageBuilder';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCities } from 'store/reducers/User/actions';
import './App.scss';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchCities());
    })

    return (
        <PageBuilder />
    );
}

export default App;
