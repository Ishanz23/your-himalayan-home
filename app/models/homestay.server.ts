import type { Homestay } from "@prisma/client";

import { prisma } from "~/db.server";

export function getAllHomestays() {
  return prisma.homestay.findMany();
}

export function getHomestay({ id }: Pick<Homestay, "id">) {
  return prisma.homestay.findFirst({
    select: { id: true, name: true, locationName: true },
    where: { id },
  });
}
