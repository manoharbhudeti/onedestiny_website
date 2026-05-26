import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "OneDestiny | Premium Luxury Wedding Vendor Booking Platform",
  description: "Discover and reserve trusted, verified local wedding vendors. Browse premium photographers, bridal makeup artists, royal catering services, wedding banquets, and pandits. Secure payments & easy booking guarantee.",
  keywords: "wedding planning, wedding vendors, photographers, caterers, makeup artists, wedding banquets, pandits, mehendi artists, wedding cars, luxury weddings, book vendors, india weddings",
  authors: [{ name: "OneDestiny Team" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        {/* Global wrapper to push content below the fixed header navigation */}
        <main style={{ flexGrow: 1, paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
