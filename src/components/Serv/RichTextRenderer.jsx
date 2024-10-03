import React from 'react';

export const RichTextRenderer = ({ content }) => {
  if (!content || !Array.isArray(content)) return null;

  const renderContent = (item) => {
    // Genera una clave única para cada item
    const key = item.id || Math.random().toString(36).substr(2, 9);

    switch (item.type) {
      case 'paragraph':
        return (
          <p key={key} className="pb-6">
            {item.children.map(renderContent)}
          </p>
        );
      case 'text':
        if (item.bold) {
          return <strong key={key}>{item.text}</strong>;
        }
        if (item.italic) {
          return <em key={key}>{item.text}</em>;
        }
        if (item.underline) {
          return <u key={key}>{item.text}</u>;
        }
        return item.text;
      case 'heading':
        const HeadingTag = `h${item.level}`;
        const headingClass = item.level === 1 ? 'text-4xl' :
                             item.level === 2 ? 'text-3xl' :
                             item.level === 3 ? 'text-2xl' :
                             'text-xl';
        return (
          <HeadingTag key={key} className={`font-bold my-4 ${headingClass}`}>
            {item.children.map(renderContent)}
          </HeadingTag>
        );
      case 'list':
        const ListTag = item.format === 'ordered' ? 'ol' : 'ul';
        const listStyle = item.format === 'ordered' ? 'list-decimal' : 'list-disc'; // Cambia a lista numérica si es ordered
        return (
          <ListTag key={key} className={`list-inside ${listStyle} my-4 pl-5`}>
            {item.children.map(renderContent)}
          </ListTag>
        );
      case 'list-item':
        return (
          <li key={key} className="py-1">
            {item.children.map(renderContent)}
          </li>
        );
      case 'image':
        return (
          <img
            key={key}
            src={item.url}
            alt={item.alternativeText || ''}
            className="my-4 max-w-full h-auto"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="rich-text-content">
      {content.map(renderContent)}
    </div>
  );
};
