import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsDetailsById(id);
  return (
    <div className="max-w-5xl mx-auto py-8">
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
          <p className="">{news.details}</p>
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
            <Link href={`/category/${news.category_id}`}>
              <button className="btn bg-purple-500 text-white">
                See Other News of This Category
                <FaArrowRight></FaArrowRight>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
