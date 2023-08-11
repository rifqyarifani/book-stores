import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/organisms/Navbar";
import Header from "@/components/organisms/Header";
import BookCategory from "@/components/organisms/BookCategory";
import Collection from "@/components/organisms/Collection";
import Pricing from "@/components/organisms/Pricing";
import Footer from "@/components/organisms/Footer";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <BookCategory />
      <Collection />
      <Pricing />
      <Footer />
    </>
  );
}
