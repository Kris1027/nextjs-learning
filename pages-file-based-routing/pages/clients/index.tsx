import Link from "next/link";

export default function ClientsPage() {
  return (
    <main>
      <h1>Clients page</h1>
      <Link href={"/clients/max"}>Max projects</Link>
    </main>
  );
}
