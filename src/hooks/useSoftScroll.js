import { useEffect, useRef } from 'react';

function useSoftScroll(distance = 10) {
  const ref = useRef(null);

  function resize_body() {
    let height = ref.current.offsetHeight;
    document.body.style.height = `${height}px`;
  }
  function handleScroll() {
    ref.current.style.transform = `translateY(${-window.scrollY}px)`;
  }
  useEffect(() => {
    window.addEventListener('resize', resize_body);
    window.addEventListener('load', resize_body);

    return () => {
      window.removeEventListener('resize', resize_body);
      window.removeEventListener('load', resize_body);
    };
  }, [ref]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return ref;
}

export default useSoftScroll;
