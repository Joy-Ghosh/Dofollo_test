import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Features from './pages/Features';
import Agency from './pages/Agency';
import LinkCounter from './pages/Tools/LinkCounter';
import KeywordDensityChecker from './pages/Tools/KeywordDensityChecker';
import Tools from './pages/Tools/index';
import Support from './pages/Support';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import DocPage from './pages/Docs/DocPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="features" element={<Features />} />
          <Route path="agency" element={<Agency />} />
          <Route path="tools" element={<Tools />} />

          <Route path="tools/link-counter" element={<LinkCounter />} />
          <Route path="tools/keyword-density" element={<KeywordDensityChecker />} />
          <Route path="support" element={<Support />} />
          <Route path="docs" element={<Navigate to="/docs/getting-started-with-dofollo" replace />} />
          <Route path="docs/:slug" element={<DocPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;