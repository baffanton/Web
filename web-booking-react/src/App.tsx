import { PageBuilder } from 'modules/PageBuilder';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBooks } from 'store/reducers/Books/actions';
import { getCountProduct } from 'store/reducers/Cart/actions';
import { fetchCities } from 'store/reducers/User/actions';
import './App.scss';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchCities());
        // @ts-ignore
        dispatch(getBooks());
        // @ts-ignore
        dispatch(getCountProduct());
    })

    return (
        <PageBuilder />
    );
}

export default App;
