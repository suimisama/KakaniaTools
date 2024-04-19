import { useRef } from 'react';
import useObserver from '../hooks/useObserver';
import Logo from './Logo';

function Navbar() {
  const ref = useRef();
  function stickyNav(entries) {
    const [entry] = entries;
    console.log(entry);
    if (entry.isIntersecting) {
      ref.current.classList.remove('sticky');
    } else {
      ref.current.classList.add('sticky');
    }
  }
  useObserver(ref, stickyNav, null);
  return (
    <nav
      ref={ref}
      className="w-full top-0 left-0 right-0 h-[var(--nav-height)] px-4 backdrop-blur-lg bg-black border-b-[1px] border-gray-700"
    >
      <header className="z-40 h-full flex items-center justify-between">
        <Logo />
        <div className="font-semibold text-xl tracking-wider text hover:opacity-[0.8] cursor-pointer transition-opacity">
          KakaniaTools
        </div>
        <div>1q23123</div>
      </header>
    </nav>
  );
}

export default Navbar;
