// import logo from './logo.svg';

import './Reset.css';
import './App.css';
import './Base.css';

import MainHeader from './components/Comps-Header/MainHeader';
import AdminHeader from './components/Comps-AdminProducts/AdminHeader';

import Banner from './components/Comps-Header/Banner';

import AddProduct from './components/Comps-AdminProducts/AddProduct';
import ProductsHome from './components/Comps-Products/ProductsHome';
import AdminProducts from './components/Comps-AdminProducts/AdminProducts';
import AdminLogin from './components/Comps-AdminProducts/AdminLogin';
import Product from './components/Comps-Products/Product';

import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <MainHeader />
      {/* <AdminHeader /> */}

      <Banner />
      
      {/* <AddProduct /> */}
      <ProductsHome />
      {/* <AdminProducts /> */}
      {/* <AdminLogin /> */}
      {/* <Product /> */}
      
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
