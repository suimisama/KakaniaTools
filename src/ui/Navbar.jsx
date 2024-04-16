import Logo from './Logo';

function Navbar() {
  return (
    <nav className="w-full h-[var(--nav-height)] px-4 backdrop-blur-lg bg-black border-b-[1px] border-gray-700">
      <header className="z-40 h-full flex items-center justify-between">
        <Logo />
        <div className="font-semibold text-xl tracking-wider text">
          KakaniaTools
        </div>
        <div>1q23123</div>
      </header>
    </nav>
  );
}

export default Navbar;
