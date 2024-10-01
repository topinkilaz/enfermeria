// import React from "react";
// import { BlogCard } from "./BlogCard";
// import { useFetch } from "../../Hooks/useFetch";

// export const BlogsComp = ({ limit }) => {
//   const today = new Date();
//   today.setDate(today.getDate() - 2);  
//   const formattedYesterday = today.toISOString().split('T')[0]; 
  
//   const access_key = '7fff07b166ee037ea5129f1472c32370';  
//   const keywords = 'salud';  
//   const language = 'es';  

  
//   const { data } = useFetch(`https://api.mediastack.com/v1/news?access_key=${access_key}&languages=${language}&keywords=${keywords}&date=${formattedYesterday}`);



//   return (
//     <>
//       <div className="dark:bg-gray-900 dark:text-white py-10 font-montserrat">
//         <section data-aos="fade-up" className="container">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            
//             {data && data.data ? (  // Verifica si 'data.data' existe y tiene artículos
//               data.data.slice(0, limit).map((article, index) => (
                
//                 <BlogCard
//                   key={index}
//                   image={article.image}  // Usa 'image' para la URL de la imagen
//                   date={article.published_at}  // Usa 'published_at' para la fecha de publicación
//                   title={article.title}
//                   description={article.description}
//                   author={article.author}
//                   url={article.url}
//                 />
//               ))
              
//             ) : (
//               <p>Sin artículos publicados</p>
//             )}
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };


/* 
 import React from "react";

import { BlogCard } from "./BlogCard";
import { useFetch } from "../../Hooks/useFetch";


export const BlogsComp = ({limit}) => {

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 2);
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
  */

import React from "react";
import { BlogCard } from "./BlogCard";
import { useFetch } from "../../Hooks/useFetch";

export const BlogsComp = ({ limit }) => {
  // Obtén la fecha de hace 2 días
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);  
  const formattedYesterday = yesterday.toISOString().split('T')[0];  

  const apiKey = '5ee53ec7b7de4cf9247cc22ddb36bd8c';  
  const query = 'enfermedades'; 
  const language = 'es';  
  const maxResults = 10;  
  // Llamada a la API de GNews para obtener noticias relacionadas con 'salud'
  const { data } = useFetch(`https://gnews.io/api/v4/search?q=${query}&lang=${language}&max=${maxResults}&apikey=${apiKey}`);

  

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10 font-montserrat">
        <section data-aos="fade-up" className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {data && data.articles ? (  // Verifica si 'data.articles' existe y tiene artículos
            data.articles.slice(0, limit).map((article, index) => (
                 <BlogCard
                   key={index}
                   image={article.image}  
                   date={article.publishedAt}  n
                   title={article.title}
                   description={article.description}
                   author={article.source.name}  
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