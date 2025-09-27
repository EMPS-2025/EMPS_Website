import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './globals.css'; // This is where your styles will go

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
