import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContentCreatorProfileView from './pages/ContentCreatorProfileView';
import ContentCreatorProfileEdit from './pages/ContentCreatorProfileEdit';
import ProductCompanySearch from './pages/ProductCompanySearch';

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<ContentCreatorProfileView />} />
        <Route path="/edit-profile" element={<ContentCreatorProfileEdit />} />
        <Route path="/product-company-search" element={<ProductCompanySearch />} />

      </Routes>
    </Router>
  );
}

export default App;
