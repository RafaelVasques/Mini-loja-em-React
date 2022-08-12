import React from 'react';
import { Outlet } from 'react-router-dom';

import AdminHeader from './AdminHeader';

export default function AdminPageLayout() {
  return (
    <div>
        <AdminHeader />
        <Outlet />
    </div>
  );
}
