import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import React from "react";

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const categories = await getCategories();
  console.log(categories.news_category);

  const news = await getNewsByCategoryId(id);
  console.log(news);

  return (
    <div>
      <div className="grid grid-cols-12 gap-4 my-15 container mx-auto">
        <div className="font-bold col-span-3">
          <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
        </div>
        <div className="font-bold text-white col-span-6">
          <h2 className="text-lg text-white">Dragon News Home</h2>
          <div className="space-y-4 mt-6">
            {news.length > 0 ? (
              news.map((n) => {
                return (
                  <div key={n.id} className="p-6 rounded-md border">
                    {n.title}
                  </div>
                );
              })
            ) : (
              <h2 className="font-bold text-4xl my-10 text-center">
                No News Found!
              </h2>
            )}
          </div>
        </div>
        <div className=" text-white col-span-3">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
