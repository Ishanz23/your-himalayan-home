import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/server-runtime";
import { json } from "@remix-run/node";

import { getAllHomestays } from "../models/homestay.server";

import { useOptionalUser } from "~/utils";

export async function loader(request: LoaderArgs) {
  const homestays = await getAllHomestays();
  return json({ homestays });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      {data.homestays.map((homestay) => (
        <div className="homestay" key={homestay.id}>
          {homestay.name}
        </div>
      ))}
    </main>
  );
}
