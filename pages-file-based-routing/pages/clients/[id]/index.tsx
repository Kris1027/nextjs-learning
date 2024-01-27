import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();

  return (
    <main>
      <h1>Client Projects page</h1>
      <button onClick={() => router.push("/clients/max/projecta")}>
        Project A
      </button>
    </main>
  );
}
