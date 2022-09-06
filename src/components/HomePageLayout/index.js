import React from 'react';
import { Outlet } from 'react-router-dom';



import HomeHeader from './HomeHeader';

export default function HomePageLayout () {
    return (
        <div>
            <HomeHeader />
            <Outlet />
        </div>
    );
}
