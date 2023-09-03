import React from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/hooks';
import { productType } from '../../redux/menuSlice';
import { addItem } from '../../redux/orderSlice';


interface ProductCardProps {
    products: productType[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
    const dispatch = useAppDispatch();
    
    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className="text-left d-flex flex-row myCard my-4" style={{ width: "70%", height: "200px", overflow: "hidden" }}>
                    <img src={product.url} style={{ width: "200px", height: "100%", objectFit: "cover" }} alt={product.name} />
                    <div className='d-flex flex-column justify-content-between w-100 p-3'>
                        <h3>{product.name}</h3>
                        <div className="d-flex justify-content-between">
                            <h2 className='p-0 m-0' style={{fontWeight:"bold"}}>{`${(product.price).toFixed(2)} $`}</h2>
                            <Button onClick={() => dispatch(addItem(product.id))}>Order Now</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
