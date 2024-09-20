import React from 'react'

export const TeamMembers = ({name,title,imgSrc}) => {
  return (
    <div className="flex flex-col items-center">
    <img
      className="object-cover w-20 h-20 mb-2 rounded-full shadow"
      src={imgSrc}
      alt={name}
    />
    <div className="flex flex-col items-center text-center">
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm text-gray-800">{title}</p>
    </div>
  </div>
  )
}
