import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/next"

import './globals.css'; // This is where your styles will go
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function RootLayout({children}) {
  return(
    <html lang="en">
      <body>
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

