//  using no_store will not cache the result of the functions
import { unstable_noStore as noStore } from 'next/cache';
import { pb } from "./pocketbase";

export async function getBlogPosts({
  filter = "",
  sort = "",
  limit = 300,
} = {}) {
  noStore();
  try {
    if (limit === null) {
      limit = 300;
    }
    return (
      await pb.collection("posts").getList(1, limit, {
        filter: filter ? `isPublished=true && ${filter}` : `isPublished=true`,
        sort: `-publishedDate ${sort}`,
        requestKey: null,
      })
    ).items;
  } catch (error) {
    console.error("ERROR :", error);
  }
}

export async function getBlogPostById({ id }) {
  noStore();
  try {
    if (!id) {
      throw new Error("No Blog found");
    } else {
      return await pb.collection("posts").getOne(id, {
        requestKey: null,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getBlogPostBySlug({ slug }) {
  noStore();
  try {
    if (!slug) {
      throw new Error("Slug not provded");
    } else {
      return (
        await pb.collection("posts").getFullList({
          filter: `slug='${slug}'`,
          requestKey: null,
        })
      )[0];
    }
  } catch (err) {
    console.log("ERROR getting Blog", err);
  }
}
