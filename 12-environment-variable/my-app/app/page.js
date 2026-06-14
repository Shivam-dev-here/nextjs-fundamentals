import Image from "next/image";

export default function Home() {
  console.log("ID:",process.env.ID);
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     
     <div>
      Home | Welcome
     </div>
     <div>
      {process.env.ID}
     </div>
    </div>
  );
}
