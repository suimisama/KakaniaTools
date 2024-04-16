import useSoftScroll from '../hooks/useSoftScroll.js';
import Navbar from './Navbar.jsx';

function AppLayout() {
  const ref = useSoftScroll();
  return (
    <>
      <div className="view-box">
        <div className="scroll-box" ref={ref}>
          <Navbar />
          <div className="inset-0 -z-10 size-full h-[1080px] items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
          <div className="inset-0 -z-10 size-full h-[1080px] items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
          <div className="inset-0 -z-10 size-full h-[1080px] items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
          <div className="inset-0 -z-10 size-full h-[1080px] items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
