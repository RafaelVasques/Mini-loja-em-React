// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Url } from './components/Url';

import './Reset.css';
import './App.css';
import './Base.css';

import HomePageLayout from './components/HomePageLayout';
import ProductsHome from './components/HomePageLayout/ProducsHome';
import ProductDetails from './components/HomePageLayout/ProducsHome/ProductDetails';
import AdminLogin from './components/HomePageLayout/AdminLogin';

import AdminPageLayout from './components/AdminPageLayout';
import AdminProducts from './components/AdminPageLayout/AdminProducts';
import AddProduct from './components/AdminPageLayout/AdminProducts/AddProduct';

import ContactUs from './components/Comps-Footer/ContactUs';
import Footer from './components/Comps-Footer/Footer';

export default function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<HomePageLayout />}>
            <Route path='/' element={<ProductsHome />} />
            <Route path='/product' element={<ProductDetails />} />
            <Route path='/admin-login' element={<AdminLogin />} />
          </Route>

          <Route path='/admin' element={<AdminPageLayout />}>
            <Route path='/admin' element={<AdminProducts />} />
            <Route path='/admin/add-product' element={<AddProduct />}/>
          </Route>
        </Routes>
      </BrowserRouter>

      <ContactUs />
      <Footer />
    </div>
  );
}