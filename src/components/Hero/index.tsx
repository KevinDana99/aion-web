"use client";
import { Gradient, MarqueeContainer, SliderContainer, Waves } from "./styled";
import Marquee from "react-fast-marquee";
import useWhatsapp from "@/hooks/useWhatsapp";
import { heroWppMessage } from "@/examples/messages/heroMessage";
import heroData from "./heroData";
import useMediaQuery from "@/hooks/useMediaquery";
import Image from "next/image";

const Hero = () => {
  const { handleSendWhatsappMessage } = useWhatsapp({});
  const isMobile = useMediaQuery("mobile");
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <Gradient>
          <div className="pt-24">
            <div
              className="flex flex-row "
              style={{
                justifyContent: "center",

                padding: 20,
              }}
            >
              <div
                className={`flex w-full flex-col items-start justify-center text-center ${!isMobile && "md:w-2/5"} md:text-left`}
              >
                <p className="tracking-loose w-full uppercase">
                  Queres llevar tu negocio al siguiente nivel?
                </p>
                <h1 className="my-4 text-5xl font-bold leading-tight">
                  Tenemos la solucion de software perfecta para vos!
                </h1>
                <p
                  style={{ width: "100%" }}
                  className="text-align mb-8 text-center text-2xl leading-normal md:text-start"
                >
                  Contactanos para que podamos asesorarte!
                </p>
                <button
                  onClick={() => handleSendWhatsappMessage(heroWppMessage)}
                  className="focus:shadow-outline mx-auto my-6 transform rounded-full bg-white px-8 py-4 font-bold text-gray-800 shadow-lg transition duration-300 ease-in-out hover:scale-105 focus:outline-none md:mx-0 lg:mx-0"
                >
                  Contactar
                </button>
              </div>
              {isMobile ? (
                <></>
              ) : (
                <div
                  style={{
                    position: "relative",
                    width: "530px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    right: 250,
                  }}
                >
                  <>
                    <MarqueeContainer
                      style={{ left: "100px", position: "absolute" }}
                    >
                      <Marquee speed={20} direction="right">
                        {heroData.map((blog, index) => (
                          <SliderContainer key={`key-${index}`}>
                            <Image src={blog.image} alt={blog.paragraph} />
                          </SliderContainer>
                        ))}
                      </Marquee>
                    </MarqueeContainer>
                    <MarqueeContainer
                      style={{ left: "360px", position: "absolute" }}
                    >
                      <Marquee speed={20} direction="left">
                        {heroData.map((blog, index) => (
                          <SliderContainer key={`key-${index}`}>
                            <Image src={blog.image} alt={blog.paragraph} />
                          </SliderContainer>
                        ))}
                      </Marquee>
                    </MarqueeContainer>

                    <MarqueeContainer
                      style={{ left: "620px", position: "absolute" }}
                    >
                      <Marquee speed={20} direction="right">
                        {heroData.map((blog, index) => (
                          <SliderContainer key={`key-${index}`}>
                            <Image src={blog.image} alt={blog.paragraph} />
                          </SliderContainer>
                        ))}
                      </Marquee>
                    </MarqueeContainer>
                  </>
                </div>
              )}
            </div>
          </div>

          <Waves className="-mt-12 lg:-mt-24">
            <svg
              viewBox="0 0 1428 174"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-2.000000, 44.000000)"
                  className="fill-current text-white dark:text-gray-dark"
                  fillRule="nonzero"
                >
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    id="Path-4"
                    opacity="0.200000003"
                  ></path>
                </g>
                <g
                  transform="translate(-4.000000, 76.000000)"
                  className="fill-current text-white dark:text-gray-dark"
                  fillRule="nonzero"
                >
                  <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
              </g>
            </svg>
          </Waves>
        </Gradient>
      </section>
    </>
  );
};

export default Hero;
