import PostPreview from "@/components/PostPreview";

export default function Home() {
  return (
    <div>
      <PostPreview
        post={{
          id: "id",
          title: "demo post",
          content: "lalalala",
          upvotes: 20,
          downvotes: 4,
        }}
      />
      <PostPreview
        post={{
          id: "id2",
          title: ":)",
          content: "...",
          upvotes: 31,
          downvotes: 2,
        }}
      />
      <PostPreview
        post={{
          id: "id3",
          title: "hi guys",
          content: "how are you today",
          upvotes: 3,
          downvotes: 7,
        }}
      />
    </div>
  );
}
