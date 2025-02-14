
import styled from "styled-components";
import LightGallery from 'lightgallery/react';
import { motion } from "framer-motion";
import Link from "next/link";


export const Button = styled(Link)`
margin: 20px 0px;
align-self: center;
`;

export const Card = styled(motion.div)`
width: 100%;
height: auto;
opacity: 0.7;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

border-radius: 0.5rem;
`;

export const StyledGrid = styled.div`
.lg-react-element {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 30px;
}

`;