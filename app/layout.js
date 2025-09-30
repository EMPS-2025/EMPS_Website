import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './globals.css'; // This is where your styles will go

export const metadata = {
  title: "Energyminds Power Solutions",
  description: "Technology-integrated energy trading platform delivering data-driven insights and sustainable energy management.",
  icons: {
    icon: "/favicon_EMPS.png",   // or "/ENERGY-MINDS-LOGO.png"
  },
};

export default function RootLayout({children}) {
  return(
    <html lang="en">
      <body>
        <Navbar />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
