import { Client } from "@repo/db/client";

export default async function Home() {
  const res = await Client.users.findFirst();

  return <div>{res?.username}</div>;
}
