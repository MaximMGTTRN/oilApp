import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import Catalog from '../pages/Catalog/Catalog';
import Contacts from '../pages/Contacts/Contacts';
import Cooperation from '../pages/Cooperation/Cooperation';

//todo 
const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<>
        <Home />
        <AboutUs text='О нас' colorStyle={'colorStyle1'} />
        <AboutUs text='Раздел 2' colorStyle={'colorStyle2'} />
        <AboutUs text='Раздел 3' colorStyle={'colorStyle1'} />

      </>
      } />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/cooperation" element={<Cooperation />} />
      <Route path='*' element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;