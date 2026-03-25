import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next"
import LicenseBanner from './components/LicenseBanner'; // <-- 1. IMPORT THE NEW COMPONENT



import './globals.css'; // This is where your styles will go
import ScrollToTopButton from "./components/ScrollToTopButton";

export const metadata = {
  title: {
    default: 'Energyminds Power Solution - EMPS',
    template: '%s | Energyminds Power Solution',
  },
  description: 'Empowering Renewable Energy with cutting-edge Automation, IoT, and AI/ML solutions.',
};

export default function RootLayout({children}) {
  return(
    <html lang="en">
      <body>
        <LicenseBanner /> {}
        <Navbar />
          <main>{children}</main>
          <Analytics />
<ScrollToTopButton />
        <Footer />
    <Analytics />
      </body>
    </html>
  );
}

