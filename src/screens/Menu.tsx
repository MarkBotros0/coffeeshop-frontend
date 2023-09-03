import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCoffeeBeans, fetchDrinks, fetchGoodies } from '../redux/menuSlice';
import ProductCard from './components/ProductCard';
import MyOrderList from './components/MyOrderList';

const Menu = () => {

    const menu = useAppSelector(state => state.menu)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDrinks());
        dispatch(fetchCoffeeBeans());
        dispatch(fetchGoodies());
    }, [])

    return (
        <div className="pt-5" style={{  backgroundColor: "#f0f0f0"}}>
           
                <MyOrderList/>
            
            <div className="p-4 content" style={{ textAlign: "left", marginLeft: "150px" }}>
                <h2 className='ms-3 mt-3' style={{ fontWeight: "bold" }}>Drinks</h2>
                <ProductCard products={menu.drinks} />

                <h2 className='ms-3 mt-3' style={{ fontWeight: "bold" }}>Coffee Beans</h2>
                <ProductCard products={menu.coffeeBeans} />

                <h2 className='ms-3 mt-3' style={{ fontWeight: "bold" }}>Goodies</h2>
                <ProductCard products={menu.goodies} />
            </div>

        </div>
    )
}

export default Menu