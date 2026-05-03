import Image from "next/image";

async function getCategories () {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json()
  return data.data
}

export default async function Home() {

  const categories = await getCategories()
  console.log(categories.news_category);
 
  return <div className="grid grid-cols-12 gap-4 my-15 container mx-auto">
    <div className="font-bold col-span-3">
      <h2 className="text-lg text-white">All Category</h2>
    <ul className="flex flex-col gap-3 mt-6">
      {
        categories.news_category.map(category => {
        return <li key={category.category_id} className="bg-slate-100 font-bold p-2 text-lg rounded-md text-center text-black">{category.category_name}</li>
    })
  }
    </ul>

    </div>
    <div className="font-bold text-3xl bg-red-100 text-black col-span-6">Dragon News Home</div>
    <div className="font-bold text-3xl bg-yellow-100 text-black col-span-3">Login With</div>
  </div>
    

}
