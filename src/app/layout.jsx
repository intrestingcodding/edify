import Navbar from "@/components/Navbar";
import "./globals.css";
import Navbar2 from "@/components/Navbar2";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Edify Elite</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
