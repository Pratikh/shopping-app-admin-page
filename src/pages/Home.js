import { useEffect, useState } from 'react';
import { NavigationBar, ProductsTiles } from '../components';
import { getProduct } from '../apiServices';
import { loadProductsActions } from '../reduxStore';
import { useDispatch } from 'react-redux'

import './commonStyle.scss'
const Home = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const getProducts = async () => {
        const data = await getProduct();
        dispatch(loadProductsActions(data.data));
        setLoading(false)
    }
    useEffect(() => {
        getProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const Component = () => {
        return (
            <>
                <NavigationBar />
                <div className='productsParent'>
                    <ProductsTiles />
                </div>
            </>
        )
    }
    return (
        <div>
            { loading ? <h3>Loading Please wait....</h3> : <Component />}
        </div>
    )
}

export default Home;