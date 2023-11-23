import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Link from "next/link";

export default async function Admin() {
  const session = await getServerSession(options);

  return (
    <main className="flex  flex-col items-center justify-between ">
      <h1>Hello from Index</h1>
      <nav>
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </nav>
      {!session && "Nessuna sessione"}
      {session && session?.user.role === "admin" && (
        <div>
          <h1>Member Server Session</h1>
          <p>{session?.user?.email}</p>
          <p>{session?.user?.role}</p>
        </div>
      )}
    </main>
  );
}
