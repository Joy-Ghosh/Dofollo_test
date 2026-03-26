import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for better initial bundle size
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Features = lazy(() => import('./pages/Features'));
const Agency = lazy(() => import('./pages/Agency'));
const Tools = lazy(() => import('./pages/Tools/index'));
const LinkCounter = lazy(() => import('./pages/Tools/LinkCounter'));
const KeywordDensityChecker = lazy(() => import('./pages/Tools/KeywordDensityChecker'));
const Support = lazy(() => import('./pages/Support'));
const WriteForUs = lazy(() => import('./pages/WriteForUs'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const DocPage = lazy(() => import('./pages/Docs/DocPage'));

const PageLoader = () => (
    <div className="w-full h-screen flex items-center justify-center bg-[#0A2E22]">
        <div className="w-12 h-12 rounded-full border-4 border-[#E1F28F]/20 border-t-[#E1F28F] animate-spin" />
    </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
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
            <Route path="write-for-us" element={<WriteForUs />} />
            <Route path="terms" element={<Terms />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="docs" element={<Navigate to="/docs/getting-started-with-dofollo" replace />} />
            <Route path="docs/:slug" element={<DocPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;