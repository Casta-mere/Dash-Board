import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>User</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UserPage;

// export async function generateMetada(): Promise<Metadata> {
//   const metaData = await fetch("");
//   return {
//     title: "metaData.title",
//     description: "...",
//   };
// }
