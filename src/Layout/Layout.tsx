import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__content">
        <Sidebar />
        <main className="board">
          <p>test</p>
        </main>
      </div>
    </div>
  );
};

export default Layout;
