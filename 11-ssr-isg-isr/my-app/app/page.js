import Image from "next/image";

export default async function Home() {
  let data = await fetch("https://api.vercel.app/blog", {next: { revalidate: 3600 } })
  const posts = await data.json();

  console.log("see terminal");

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        Home | Welcome
      </div>
    </>
  );
}

// export const dynamic = 'force-dynamic'