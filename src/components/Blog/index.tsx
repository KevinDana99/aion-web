import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Slider from "../Slider";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="+50 Negocios usan nuestra tecnologia"
          paragraph="Algunos de nuestros proyectos"
          center
        />

       
    <Slider>
    {blogData.map((blog,index) =>    <div key={`key-${index}`} className="w-full">
              <SingleBlog blog={blog} />
            </div>)} 
    </Slider>
        
      </div>
      <div style={{marginTop: 20}} className="flex items-center justify-center pr-16 lg:pr-0">
      <Link
                  href="/blog"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                >
                Ver mas
                </Link>
                </div>
    </section>
  );
};

export default Blog;
//<Image src={slide.src} alt={slide.alt} height={200} width={500}/>