import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ScrollToggle from '../Ui/ScrollToggle';
import ScrollToTop from '../Ui/ScrollToTop';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';
import TrackPageView from '../../utils/TrackPageView';
import BrochuresModal from '../Brochures/BrochuresModal';
import { BrochureProvider } from '../Brochures/BrochureProvider';


const Layout = () => {
  return (
    <BrochureProvider>
    <div className='w-full mx-auto max-w-[80rem] max-md:px-5'>
      <Navbar />
      <Toaster />
      <TrackPageView/>
      <ScrollToggle />
      <ScrollToTop />
      <Outlet />
    
      <BrochuresModal/>
  
      <Footer />
    </div>
    </BrochureProvider>
  );
}

export default Layout;
