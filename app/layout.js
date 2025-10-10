import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './globals.css'; // This is where your styles will go

export const metadata = {
  useEffect(() => {
    const btn = document.getElementById("scrollToTopBtn");
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
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
    <button id="scrollToTopBtn" className="scroll-to-top-btn" aria-label="Scroll to top">
  ↑
</button>
        <Footer />
      </body>
    </html>
  );
}
