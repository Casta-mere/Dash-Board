import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <main>
        <h1>Hello {session && session.user!.name}!</h1>
        <Link href="/users">Users</Link>
        <ProductCard />
        <HeavyComponent />
        {/* <Image src={RDR2} alt="An image of RDR2" /> */}
      </main>
    </>
  );
}

// export const metadata: Metadata = {
//   title: "Home Page",
//   description: "...",
// };
