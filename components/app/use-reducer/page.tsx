import Link from "next/link";
import FetchReducer from "./use-reducer-with-fetch/fetch-reducer";
import SimplyUseReducer from "./simply-use-reducer/simply-use-reducer";

export default function UseReducer() {
  return (
    <main className="flex flex-col gap-10">
      <Link className="bg-slate-500 px-6 py-2 rounded-lg" href={"/"}>
        HOME
      </Link>
      <FetchReducer />
      <SimplyUseReducer />
    </main>
  );
}
