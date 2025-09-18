import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Banner from "../components/layout/Banner";
import Footer from "../components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Property Management App",
  description: "A modern property management application with Poppins and Montserrat fonts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Banner />
        <Footer />
      </body>
    </html>
  );
}
