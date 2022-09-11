// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { ProductsProvider } from './components/contexts/productContext';

import './Reset.css';
import './App.css';
import './Base.css';

import HomePageLayout from './components/HomePageLayout';
import ProductsHome from './components/HomePageLayout/ProducsHome';
import ProductDetails from './components/HomePageLayout/ProducsHome/ProductDetails';
import SeeAllProductsCategory from './components/HomePageLayout/ProducsHome/SeeAllProductsCategory';
import AdminLogin from './components/HomePageLayout/AdminLogin';

import AdminPageLayout from './components/AdminPageLayout';
import AdminProducts from './components/AdminPageLayout/AdminProducts';
import AddProduct from './components/AdminPageLayout/AdminProducts/AddProduct';
import EditProduct from './components/AdminPageLayout/AdminProducts/EditProduct';

import ContactUs from './components/Comps-Footer/ContactUs';
import Footer from './components/Comps-Footer/Footer';
import Page404 from './components/Page404';

export default function App() {

  return (
    <div>  
      <BrowserRouter >
        <ProductsProvider>
          <Routes>

            <Route path='/' element={<HomePageLayout />}>
              
              <Route path='/' element={<ProductsHome />}/>
              <Route path='/product/:productId' element={<ProductDetails />}/>
              <Route path='/see-all/:categoryId' element={<SeeAllProductsCategory />}/>
              <Route path='/admin-login' element={<AdminLogin />} />
              <Route path='*' element={<Page404/>} />

            </Route>

            <Route path='/admin' element={<AdminPageLayout />}>
                
              <Route path='/admin' element={<AdminProducts />}/>
              <Route path='/admin/add-product' element={<AddProduct />}/>
              <Route path='/admin/edit-product/:productId' element={<EditProduct />}/>
              <Route path='*' element={<Page404/>} />

            </Route>

          </Routes>
        </ProductsProvider>
      </BrowserRouter>

      <ContactUs />
      <Footer />
    </div>
  );
}