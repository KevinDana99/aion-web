"use client";
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { ReactNode, useEffect, useRef } from 'react';
import lightGallery from 'lightgallery';
import { Button, Card, StyledGrid } from './styled';
import {motion} from 'framer-motion'
import Link from 'next/link';
const Gallery = ({children}: {children: ReactNode[]}) => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    
    return (
      <StyledGrid>
            <LightGallery

        onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}

            >
             
           {children.map((child,index) =>  <Card style={{boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.2)'}} key={`key-${index}`} className="w-full dark:bg-gray-dark"  whileHover={{
                  scale: 1.2,  
                  zIndex: 10, 
                  opacity: 1,
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',   
                  transition: {
                    duration: 0.2,   
                    ease: 'easeInOut', 
                  },
                }}> {child}
                    <Button
                  href="/blog"
                  style={{width: 'auto', height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                  className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                >
                Ver mas
                </Button>
                </Card>)}
     
            </LightGallery>
            </StyledGrid>
    );
}

export default Gallery