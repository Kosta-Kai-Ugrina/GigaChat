import GigaChat from "@/components/GigaChat/GigaChat";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-neutral-950 dark:bg-black sm:items-start">
        <GigaChat />
      </main>
    </div>
  );
}
