import React from 'react';

import AdminHeader from './AdminHeader';
import AdminProducts from './AdminProducts';
import AddProduct from './AdminProducts/AddProduct';

export default function AdminPage() {
  return (
    <div>
        <AdminHeader />
        <AdminProducts />
        <AddProduct />
    </div>
  );
}
