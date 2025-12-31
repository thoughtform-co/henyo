import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks';
import { LandingPage } from '@/pages/LandingPage';

// Future pages can be lazy loaded:
// const WorkPage = lazy(() => import('@/pages/WorkPage'));

/**
 * Smooth scroll provider
 */
function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}

/**
 * App Shell with Router
 */
export default function App() {
  return (
    <BrowserRouter>
      <SmoothScrollProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Future routes:
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/use-cases/:slug" element={<UseCasePage />} />
          */}
        </Routes>
      </SmoothScrollProvider>
    </BrowserRouter>
  );
}
