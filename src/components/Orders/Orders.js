import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        <div>
            <h1>This is from Orders: {products.length} </h1>
        </div>
    );
};

export default Orders;