import React from "react";
import { BlogCard } from "./BlogCard";
import { useFetch } from "../../Hooks/useFetch";

export const BlogsComp = ({ limit }) => {
  const today = new Date();
  today.setDate(today.getDate() - 2);  
  const formattedYesterday = today.toISOString().split('T')[0]; 
  
  const access_key = '7fff07b166ee037ea5129f1472c32370';  
  const keywords = 'salud';  
  const language = 'es';  

  
  const { data } = useFetch(`https://api.mediastack.com/v1/news?access_key=${access_key}&languages=${language}&keywords=${keywords}&date=${formattedYesterday}`);



  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10 font-montserrat">
        <section data-aos="fade-up" className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            
            {data && data.data ? (  // Verifica si 'data.data' existe y tiene artículos
              data.data.slice(0, limit).map((article, index) => (
                
                <BlogCard
                  key={index}
                  image={article.image}  // Usa 'image' para la URL de la imagen
                  date={article.published_at}  // Usa 'published_at' para la fecha de publicación
                  title={article.title}
                  description={article.description}
                  author={article.author}
                  url={article.url}
                />
              ))
              
            ) : (
              <p>Sin artículos publicados</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};