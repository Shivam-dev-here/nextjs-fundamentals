"use client"
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const searchParams = useSearchParams();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
   
   Home | Page | blog is {searchParams.get('blog')} and {searchParams.get('utm_source')}

   <div>Shivam-dev-here</div>
   <div>

   </div>
    </div>
  );
}
