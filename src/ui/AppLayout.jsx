import Navbar from './Navbar.jsx';

function AppLayout() {
  return (
    <div className="snap-y h-[1080px] overflow-y-scroll transition-all">
      <Navbar />
      <div className="snap-start snap-always inset-0 -z-10 size-full h-[1080px] items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      <div className="snap-start snap-always inset-0 -z-10 size-full h-[1080px] items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      <div className="snap-start snap-always inset-0 -z-10 size-full h-[1080px] items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      <div className="snap-start snap-always inset-0 -z-10 size-full h-[1080px] items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
    </div>
  );
}

export default AppLayout;
