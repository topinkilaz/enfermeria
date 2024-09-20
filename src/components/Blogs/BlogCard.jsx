import React from "react";
import { Link } from "react-router-dom";


export const BlogCard = ({ image, date, title, description, author,url }) => {
  const formattedDateShort = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <>
    <Link
      to={`${url}`}
      onClick={() => {
        window.scrollTo(0, 0);
        // window.scroll({
        //   top: 0,
        //   left: 0,
        //   behavior: "smooth",
        // });
      }}
       target="_blank"
        rel="noopener noreferrer"
      state={{ image, date, title, description, author,url}}
    >
      <div className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
        <div className="overflow-hidden">
          <img
            src={image}
            alt="No image"
            className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
          />
        </div>
        <div className="flex justify-between pt-2 text-slate-600">
          <p>{formattedDateShort}</p>
          <p className="line-clamp-1">By {author}</p>
        </div>
        <div className="space-y-2 py-3">
          <h1 className="line-clamp-2 font-bold">{title}</h1>
          <p className="line-clamp-4">{description}</p>
        </div>
      </div>
    </Link>
  </>
  )
}



