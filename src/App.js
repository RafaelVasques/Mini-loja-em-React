// import logo from './logo.svg';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Url } from './components/Url';

import './Reset.css';
import './App.css';
import './Base.css';

// import HomePageLayout from './components/HomePageLayout';
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
      <HashRouter>
        <Routes>
          <Route path="/desafio-Alura-1" element={<ProductDetails />}>
            <Route path="/desafio-Alura-1" element={<ProductsHome />} />
            <Route path='/desafio-Alura-1/product' element={<ProductDetails />} />
            <Route path='/desafio-Alura-1/admin-login' element={<AdminLogin />} />
          </Route>

          <Route path={ Url() + '/admin' } element={<AdminPageLayout />}>
            <Route path={ Url() + '/admin' } element={<AdminProducts />} />
            <Route path={ Url() + '/admin/add-product' } element={<AddProduct />}/>
          </Route>
        </Routes>
      </HashRouter>

      <ContactUs />
      <Footer />
    </div>
  );
}