import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Gallery from "@/components/Gallery";
import HeaderSpace from "@/components/Header/HeaderSpace";
import { Metadata } from "next";
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: "Blog Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Page for Startup Nextjs Template",
};

const Blog = () => {
  return (
    <>
   <HeaderSpace/>

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          
            <Gallery>
            {blogData.map((blog) =>  
                <div className="w-full" >
                  <a href={blog.image} data-src={blog.image} className="gallery-link">
              <SingleBlog blog={blog} />
              </a>
              
            </div>
            )} 
      </Gallery>
      
          </div>|
      </section>
    </>
  );
};

export default Blog;
