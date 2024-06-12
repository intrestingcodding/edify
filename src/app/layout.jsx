import Navbar from "@/components/Navbar";
import "./globals.css";
import Navbar2 from "@/components/Navbar2";
import Navbar3 from "@/components/Navbar3";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Edify Elite</title>
      </head>
      <body>
        {/* <Navbar /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
