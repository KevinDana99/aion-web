"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

import { Providers } from "./providers";
import HeaderSpace from "@/components/Header/HeaderSpace";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body
        style={{ background: loading ? "#5271ff" : null }}
        className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}
      >
        <Providers>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Header />
              {children}
              <Footer />
            </>
          )}

          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
