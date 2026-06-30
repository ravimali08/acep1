import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './index.css';

// Code Splitting (Lazy Loading) for Lightning Fast First Render
const Home = lazy(() => import('./pages/Home'));
const Membership = lazy(() => import('./pages/Membership'));
const Events = lazy(() => import('./pages/Events'));
const Tournaments = lazy(() => import('./pages/Tournaments'));
const Coaching = lazy(() => import('./pages/Coaching'));
const Blog = lazy(() => import('./pages/Blog'));
const Gallery = lazy(() => import('./pages/Gallery'));
const BookCourt = lazy(() => import('./pages/BookCourt'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium Splash Screen Loader (Syncs with index.html CSS loader)
const PageLoader = () => (
  <div className="flex h-[80vh] items-center justify-center bg-gray-50">
    <div className="w-12 h-12 rounded-full border-[3px] border-gray-200 border-t-blue-600 animate-spin"></div>
  </div>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="membership" element={<Membership />} />
            <Route path="events" element={<Events />} />
            <Route path="tournaments" element={<Tournaments />} />
            <Route path="coaching" element={<Coaching />} />
            <Route path="blog" element={<Blog />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="book-court" element={<BookCourt />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);

