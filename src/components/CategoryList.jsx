import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const categories = ['Electronics', 'Foods & Snacks', 'Books', 'Songs', 'Note & Pens'];
  console.log(categories)
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={`/category/${category.toLowerCase().replace(/ /g, '-')}`}
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded  no-underline"
        >
          {category}
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
