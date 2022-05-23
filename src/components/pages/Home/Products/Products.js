import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import Product from './Product';

const Products = () => {
    
    const {data: products, isLoading} = useQuery('products', ()=>fetch('http://localhost:5000/products').then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='pt-40 mb-8 p-8 bg-base-100'>
            <h4 className='text-lg text-center text-secondary'>TOP SALE IN THE WEEK</h4>
            <h1 className='text-5xl text-neutral font-bold text-center divider'>Feature Products</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:mx-8 mt-12 gap-8'>
                {products?.map(product => <Product
                 key={product._id}
                 product={product}
                ></Product>)}
            </div>
        </div>
    );
};

export default Products;