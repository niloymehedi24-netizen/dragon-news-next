import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    id: 1,
    title: "Breaking News: Major Tech Breakthrough Announced Today",
  },
  {
    id: 2,
    title: "Breaking News: Global Markets See Unexpected Surge",
  },
  {
    id: 3,
    title: "Breaking News: New AI Model Changes the Industry",
  },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between gap-4 items-center py-4 px-2 bg-gray-200 container mx-auto">
      <button className="btn bg-red-500 text-white">Latest News</button>
      <Marquee pauseOnHover={true} speed={100}>
        {news.map((n) => (
          <span key={n.id} className="text-gray-600">
            {n.title}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
