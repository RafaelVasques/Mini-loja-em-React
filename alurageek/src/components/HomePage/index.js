import React from 'react';

import HomeHeader from './HomeHeader';
import ProductsHome from './ProducsHome';
import ProductDetails from './ProducsHome/ProductDetails';
import AdminLogin from './AdminLogin';

export default function HomePage() {
    return (
        <div>
            <HomeHeader />
            <ProductsHome />
            {/* <ProductDetails /> */}
            {/* <AdminLogin /> */}
        </div>
    );
}
