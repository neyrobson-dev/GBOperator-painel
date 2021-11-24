import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home';
import Users from '../pages/Users';

const AppRoutes: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
