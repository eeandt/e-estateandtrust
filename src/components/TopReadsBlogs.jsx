import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const dynamic ='force-dynamic'

async function getBlogs() {
    const allBlogPosts = await fetch(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/blogs/latest`,
      {
        cache: "no-store",
      }
    ).then((res) => res.json());
    return allBlogPosts;
  }

export default async function TopReadsBlogs() {

  const latestBlogs = await getBlogs();

  
  return (
    <div>
        
        {latestBlogs?.map((item) => (
                <div key={item.id} className="flex items-center gap-4  py-4">
                  <Image
                    className="border-1  "
                    src={
                      item?.featuredImage
                        ? `${
                            process.env.NEXT_PUBLIC_SERVER_URL ||
                            "https://api.e-estatesandtrusts.com"
                          }/api/files/posts/${item.id}/${item.featuredImage}`
                        : "/icons/defaultImage.png"
                    }
                    width={50}
                    height={70}
                    alt="blogs featured image"
                  />
                  <Link href={`/blogs/${item.slug}`}>
                    <p className="text-[#FFFFFF] text-sm hover:text-[#86E21B] break-words font-Nunito ">
                      {item.title}
                      <strong className="text-[#86E21B] px-2  font-light">
                        Read more
                      </strong>
                    </p>
                  </Link>
                </div>
              ))}
    </div>
  )
}
