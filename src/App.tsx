import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Features from './pages/Features';
import LinkCounter from './pages/LinkCounter';
import Tools from './pages/Tools';
import Support from './pages/Support';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="tools" element={<Tools />} />
          <Route path="tools" element={<Tools />} />
          <Route path="tools/link-counter" element={<LinkCounter />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;