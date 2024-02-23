import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>User</h1>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UserPage;
