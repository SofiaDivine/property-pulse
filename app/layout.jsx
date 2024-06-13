import React from 'react';
import '@assets/styles/globals.css';
import Navbar from '@components/Navbar.jsx';
import Footer from '@components/Footer.jsx';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
<body>
  <Navbar/>
    <main>
      {children}
    </main>
    <Footer/>
</body>
    </html>
  );
};

export default MainLayout
