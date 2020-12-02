import React, { useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/Common/MessageBox';
import LoadingBox from '../components/Common/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const{loading,error,products} = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, []);
    return (
        <div>
            {loading? <LoadingBox></LoadingBox>
            :
            error? <MessageBox variant="danger">{error}</MessageBox>
            :
            <div className="row center">
            {
                products.map(product=>(
                    <Product key={products._id} product={product}></Product>
                ))
            }
            </div>
            }
        </div>
            
    )
}
