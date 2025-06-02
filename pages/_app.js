import "@/styles/globals.css";
import Nav from "@/pages/nav"; // Ensure this is the right path
import Footer from "./footer";
import { Lexend, Poppins } from "next/font/google";
import 'remixicon/fonts/remixicon.css'
// Load Lexend font
export const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});
export const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],   // optional: specify weights you want to load
});

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
