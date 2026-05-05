import { useLayoutEffect, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

/** Scroll window to top on every client-side route change. */
export function ScrollToTopOnNavigate() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [pathname, hash]);

  return null;
}

export function BackToTopFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-[#2D9C4E] text-white shadow-xl shadow-black/20 ring-2 ring-white/30 transition hover:bg-[#1B5E2E] hover:scale-[1.05] focus-visible:outline focus-visible:ring-4 focus-visible:ring-[#2D9C4E]/40"
    >
      <ChevronUp className="h-6 w-6" aria-hidden />
    </button>
  );
}
