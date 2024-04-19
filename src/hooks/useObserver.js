import { useEffect } from 'react';

function useObserver(ref, fn, root = null) {
  useEffect(() => {
    const height = ref.current.getBoundingClientRect().height;
    const observer = new IntersectionObserver(fn, {
      root: null,
      threshold: 0.5,
      rootMargin: `-${height}px`,
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);
}

export default useObserver;
