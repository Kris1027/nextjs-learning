import Link from "next/link";
import Nav from "./burger-menu/Nav";

export default function FramerMotion() {
  return (
    <main className="flex flex-col gap-10">
      <Link className="bg-slate-500 px-6 py-2 rounded-lg" href={"/"}>
        HOME
      </Link>
      <Nav />
    </main>
  );
}
