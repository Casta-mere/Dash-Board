import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import RDR2 from "@/public/RDR2.png";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <main>
        <h1>Hello {session && session.user!.name}!</h1>
        <Link href="/users">Users</Link>
        <ProductCard />
        {/* <Image src={RDR2} alt="An image of RDR2" /> */}
      </main>
    </>
  );
}
