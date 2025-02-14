import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import HeaderSpace from "@/components/Header/HeaderSpace";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
       <HeaderSpace/>
      <Contact />
    </>
  );
};

export default ContactPage;
