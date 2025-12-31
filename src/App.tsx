import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
  
// Lazy load pages for code splitting
const LandingPage = lazy(() =>
  import('@/pages/LandingPage').then((module) => ({ default: module.LandingPage }))
);

// Future pages can be added here with lazy loading:
// const WorkPage = lazy(() => import('@/pages/WorkPage'));
// const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
// const UseCasePage = lazy(() => import('@/pages/UseCasePage'));
      
/**
 * Loading fallback component
 */
function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
            <p
        className="text-[#888888]"
              style={{ 
                fontFamily: "'Founders Grotesk', sans-serif",
                fontWeight: 400,
          fontSize: 'clamp(18px, 2.5vw, 24px)',
            }}
          >
        Loading...
            </p>
    </div>
  );
}

/**
 * App Shell with Router
 *
 * Currently renders only the landing page.
 * Future pages can be added as new routes with lazy loading.
 *
 * Example future routes:
 * - /work - Portfolio/case studies overview
 * - /services - Detailed services page
 * - /use-cases/:slug - Individual case study pages
 * - /contact - Contact page
 */
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Future routes:
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/use-cases/:slug" element={<UseCasePage />} />
          */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
