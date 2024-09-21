import React from "react";

import { BlogCard } from "./BlogCard";
import { useFetch } from "../../Hooks/useFetch";


export const BlogsComp = ({limit}) => {

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const formattedYesterday = yesterday.toISOString().split('T')[0];


  const key= '3f99b611d2724800a9b792b1ea48609c';
  const value= 'enfermedades';
  const {data}=useFetch(`https://newsapi.org/v2/everything?q=${value}&from=${formattedYesterday}&sortBy=relevancy&language=es&apiKey=${key}`)

 
  return (
    <>
     <div className="dark:bg-gray-900 dark:text-white py-10 font-montserrat">
        <section data-aos="fade-up" className="container ">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {data && data.articles ? (
            
        data.articles.slice(0, limit).map((article, index) => (
          <BlogCard
          key={index}
          image={article.urlToImage}
          date={article.publishedAt}
          title={article.title}
          description={article.description} 
          author={article.author}
          url={article.url}
             
       
          />
        ))
        
      ) : (
        <p>Sin articulos publicados</p>
      )}
          </div>
        </section>
      </div>
    </>
  )
}


