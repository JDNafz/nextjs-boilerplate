// The [slug] in brackets makes this a dynamic route

import Link from "next/link";

// This function tells Next.js what slugs are valid (for static generation)
export async function generateStaticParams() {
  // In a real app, you'd fetch all possible slugs from your data source
  const posts = [{ slug: "first-post" }, { slug: "second-post" }];

  // Return array of objects with the dynamic route parameter
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 'params' is a Next.js keyword for dynamic routes
//   Keyword    type  of  > {slug: string}
// { params }: { params: { slug: string }

// 'slug' in this context matches whatever the name of the folder is
export default function BlogPost({ params }: { params: { slug: string } }) {
  // In a real app, you'd fetch the post data based on params.slug
  const postData = {
    "first-post": {
      title: "My First Blog Post",
      content: "This is the full content of my first blog post. It's quite interesting!",
      date: "2024-01-01",
    },
    "second-post": {
      title: "Another Blog Post",
      content: "This is different content for the second post. Much more exciting!",
      date: "2024-01-15",
    },
  };

  // Get the specific post data using the slug from the URL
  const post = postData[params.slug as keyof typeof postData];

  // Handle case where slug doesn't exist
  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>Published: {post.date}</p>
      <div>
        <p>{post.content}</p>
      </div>

      {/* Navigation back to blog listing */}
      <nav>
        <Link href="/blog">← Back to All Posts</Link>
      </nav>
    </article>
  );
}
