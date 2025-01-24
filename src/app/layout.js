import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next js Home",
    template: "%s | Next.js 14",
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-navyBlue text-white m-0 p-0 box-border  ">
        <div className="flex flex-col sm:w-[700px] w-[100%] h-[700px] sm:px-20 px-20">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
