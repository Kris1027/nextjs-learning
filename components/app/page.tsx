import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10 space-x-5">
      <Link className="bg-slate-500 px-6 py-2 rounded-lg" href="/framer-motion">
        Framer Motion
      </Link>
      <Link className="bg-slate-500 px-6 py-2 rounded-lg" href="/use-reducer">
        UseReducer
      </Link>
    </main>
  );
}
