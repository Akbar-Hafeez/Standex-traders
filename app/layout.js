import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

import 'animate.css';
import { AuthProvider } from "./context/AuthContext";
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Standex traders | Home",
  description: "This is home page of standex traders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
    <link rel="icon" href="/logo.jpg"  sizes="any" />
      <AuthProvider>
      <body className={inter.className}>
<Header/>
        {children}
        <Footer/>
        </body>
        </AuthProvider>
    </html>
  );
}
