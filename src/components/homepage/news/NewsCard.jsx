import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const NewsCard = ({ news }) => {
  console.log(news, "news");
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/* author info */}
          <div className="flex justify-between text-center text-black bg-slate-200 p-4">
            <div className="flex gap-1 items-center">
              <Image
                src={news.author?.img}
                alt={news.author?.name}
                height={40}
                width={40}
                className="rounded-full"
              ></Image>
              <div>
                <h2 className="font-semibold">{news.author?.name}</h2>
                <p className="text-xs">{news.author?.published_date}</p>
              </div>
            </div>
            <div className="flex justify-between text-center">
              <CiShare2 className="text-lg"></CiShare2>
              <CiBookmark className="text-lg"></CiBookmark>
            </div>
          </div>
          <h2 className="card-title">{news.title}</h2>
          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={300}
              height={400}
              className="w-full"
            ></Image>
          </figure>
          <p className="line-clamp-3">{news.details}</p>
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <h2 className="flex items-center gap-2 text-yellow-500">
                <IoStar></IoStar>
                {news.rating.number}
              </h2>
              <h2 className="flex items-center gap-2">
                <FaEye></FaEye>
                {news.total_view}
              </h2>
            </div>
            <Link href={`/news/${news._id}`}>
              <button className="btn">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
