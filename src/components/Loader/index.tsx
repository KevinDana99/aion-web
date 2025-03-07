"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Ball, Container, LoaderBar, Title } from "./styled";
import "./styles.css";
const Loader = () => {
  const [loader, setLoader] = useState(true);

  useLayoutEffect(() => {
    setLoader(false);
  }, []);
  return (
    <>
      <div className="loaderContainer">
        <img src="images/loaders/loader.gif"></img>
        <div className="loaderBar">
          <Ball index={1}></Ball>
          <Ball index={2}></Ball>
          <Ball index={3}></Ball>
          <Ball index={4}></Ball>
          <Ball index={5}></Ball>
        </div>

        <span className="title">Estamos cargando el sitio para ti</span>
      </div>
    </>
  );
};

export default Loader;
