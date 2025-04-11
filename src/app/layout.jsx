import { Geist, Inter, Krona_One, Syne, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import BrochuresModal from "@/components/Brochures/BrochuresModal";
import { BrochureProvider } from "@/components/Brochures/BrochureProvider";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import TrackPageView from "@/utils/TrackPageView";
import ScrollToggle from "@/components/Ui/ScrollToggle";
import ScrollToTop from "@/components/Ui/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kronaFont = Krona_One({
  weight: "400",
  variable: "--font-krona",
  subsets: ["latin"],
});

const syneFont = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const notoSansFont = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bolka",
  description: "AI tech company that specializes in creating advanced AI solutions.",
  icons: {
    icon: "/Bolka.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${interFont.variable} ${kronaFont.variable} ${syneFont.variable} ${notoSansFont.variable}`}>
      <body className="antialiased w-full mx-auto max-w-[75rem] max-md:px-5 ">
        <Navbar />
        <Toaster />
        <TrackPageView />
        <ScrollToggle />
        <ScrollToTop />
        <BrochureProvider>
          {children}
          <Footer />
          <BrochuresModal />
        </BrochureProvider>
        <div id="modal-root" />
      </body>
    </html>
  );
}
