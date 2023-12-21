import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[1fr_auto] bg-charcoal text-sm text-dark">
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
