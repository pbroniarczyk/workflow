import React from 'react';

import Flex from '../components/Flex/Flex';
import Board from '../components/Board';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />

      <Flex justify="start" className="layout__content">
        <Sidebar />

        <Board />
      </Flex>
    </div>
  );
};

export default Layout;
