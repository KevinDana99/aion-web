"use client";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { ReactNode, useEffect, useRef } from "react";
import lightGallery from "lightgallery";
import { Button, Card, StyledGrid } from "./styled";
import { motion } from "framer-motion";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaquery";
const Gallery = ({ children }: { children: ReactNode[] }) => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  const isMobile = useMediaQuery("mobile");

  return (
    <StyledGrid mobile={isMobile}>
      <LightGallery
        zoom
        download={false}
        selector="a.gallery-link"
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {children.map((child, index) => (
          <Card
            style={{ boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.2)" }}
            key={`key-${index}`}
            className="w-full dark:bg-gray-dark"
            whileHover={{
              scale: isMobile ? 1.1 : 1.2,
              zIndex: 10,
              opacity: 1,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
          >
            {child}
          </Card>
        ))}
      </LightGallery>
    </StyledGrid>
  );
};

export default Gallery;
