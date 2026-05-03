import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="text-lg text-white">All Category</h2>
      <ul className="flex flex-col gap-3 mt-6">
        {categories.news_category.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`${activeId === category.category_id && "bg-slate-100"}
                font-bold text-lg rounded-md text-center text-black`}
            >
              <Link
                href={`/category/${category.category_id}`}
                className="block text-white p-2"
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;
