import { PostProps } from "@/types";
import mockData from "@/mock.json";
import getCollection, { POSTS_COLLECTION } from "@/db"

export default async function getAllPosts(): Promise<PostProps[]> {
  const postsCollection = await getCollection(POSTS_COLLECTION);
  const data = await postsCollection.find().toArray();

  const posts: PostProps[] = data.map(p => ({
    id: p._id.toHexString(),
    title: p.title,
    content: p.content,
    upvotes: p.upvotes,
    downvotes: p.downvotes,
  }));

  return posts;
}
